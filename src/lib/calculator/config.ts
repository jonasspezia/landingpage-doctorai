// Configurações da Calculadora ROI do DoctorAI

export const CALCULATOR_CONFIG = {
  // Fator de redução do DoctorAI (80% de economia no tempo)
  reductionFactor: 0.80,

  // Limites dos sliders
  limits: {
    consultasPerDay: { min: 5, max: 40, default: 15 },
    minutesPerRecord: { min: 5, max: 20, default: 10 },
    daysPerWeek: { min: 3, max: 6, default: 5 },
    hourlyRate: { min: 100, max: 500, default: 200 },
  },

  // Semanas no mês (média)
  weeksPerMonth: 4.33,

  // Preco mensal do DoctorAI (Plano Completo)
  monthlyPrice: 149,
};

export interface ROIResults {
  // Tempo atual gasto (horas/mês)
  currentTimeHours: number;

  // Tempo com DoctorAI (horas/mês)
  timeWithDoctorAI: number;

  // Horas economizadas por mês
  hoursSavedPerMonth: number;

  // Valor economizado por mês (R$)
  moneySavedPerMonth: number;

  // ROI percentual
  roiPercentage: number;

  // Consultas adicionais possíveis
  additionalConsultations: number;
}

export function calculateROI(
  consultasPerDay: number,
  minutesPerRecord: number,
  daysPerWeek: number,
  hourlyRate: number
): ROIResults {
  const { reductionFactor, weeksPerMonth, monthlyPrice } = CALCULATOR_CONFIG;

  // Tempo atual em minutos por mês
  const currentTimeMinutesMonth = consultasPerDay * minutesPerRecord * daysPerWeek * weeksPerMonth;

  // Tempo atual em horas por mês
  const currentTimeHours = currentTimeMinutesMonth / 60;

  // Tempo com DoctorAI (redução de 80%)
  const timeWithDoctorAI = currentTimeHours * (1 - reductionFactor);

  // Horas economizadas
  const hoursSavedPerMonth = currentTimeHours - timeWithDoctorAI;

  // Valor economizado (horas * valor hora)
  const moneySavedPerMonth = hoursSavedPerMonth * hourlyRate;

  // ROI = (Ganho - Investimento) / Investimento * 100
  const roiPercentage = ((moneySavedPerMonth - monthlyPrice) / monthlyPrice) * 100;

  // Consultas adicionais (assumindo 15 min por consulta)
  const additionalConsultations = Math.floor(hoursSavedPerMonth * 4);

  return {
    currentTimeHours: Math.round(currentTimeHours * 10) / 10,
    timeWithDoctorAI: Math.round(timeWithDoctorAI * 10) / 10,
    hoursSavedPerMonth: Math.round(hoursSavedPerMonth * 10) / 10,
    moneySavedPerMonth: Math.round(moneySavedPerMonth),
    roiPercentage: Math.round(roiPercentage),
    additionalConsultations,
  };
}
