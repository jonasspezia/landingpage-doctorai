"use client";

import { useState, useMemo } from "react";
import {
  Calculator,
  Clock,
  DollarSign,
  TrendingUp,
  Users,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { CALCULATOR_CONFIG, calculateROI } from "@/lib/calculator/config";

interface ROICalculatorProps {
  variant?: "full" | "compact";
  showCTA?: boolean;
}

export default function ROICalculator({ variant = "full", showCTA = true }: ROICalculatorProps) {
  const { limits } = CALCULATOR_CONFIG;

  const [consultasPerDay, setConsultasPerDay] = useState(limits.consultasPerDay.default);
  const [minutesPerRecord, setMinutesPerRecord] = useState(limits.minutesPerRecord.default);
  const [daysPerWeek, setDaysPerWeek] = useState(limits.daysPerWeek.default);
  const [hourlyRate, setHourlyRate] = useState(limits.hourlyRate.default);

  const results = useMemo(
    () => calculateROI(consultasPerDay, minutesPerRecord, daysPerWeek, hourlyRate),
    [consultasPerDay, minutesPerRecord, daysPerWeek, hourlyRate]
  );

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
    }).format(value);
  };

  if (variant === "compact") {
    return (
      <div className="bg-cinza-900 rounded-2xl p-6 border border-cinza-800">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="w-5 h-5 text-dourado" />
          <h3 className="text-white font-semibold">Calcule sua Economia</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-cinza-400 text-sm block mb-2">
              Consultas por dia: <span className="text-dourado font-semibold">{consultasPerDay}</span>
            </label>
            <input
              type="range"
              min={limits.consultasPerDay.min}
              max={limits.consultasPerDay.max}
              value={consultasPerDay}
              onChange={(e) => setConsultasPerDay(Number(e.target.value))}
              className="w-full accent-dourado"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-cinza-800">
            <div className="text-center">
              <p className="text-2xl font-bold text-dourado">{results.hoursSavedPerMonth}h</p>
              <p className="text-cinza-500 text-xs">economizadas/mês</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-verde">{formatCurrency(results.moneySavedPerMonth)}</p>
              <p className="text-cinza-500 text-xs">economia/mês</p>
            </div>
          </div>
        </div>

        {showCTA && (
          <a
            href="/calculadora"
            className="mt-4 w-full flex items-center justify-center gap-2 text-dourado text-sm font-medium hover:text-dourado-claro transition-colors"
          >
            Ver cálculo completo
            <ChevronRight className="w-4 h-4" />
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-elevated overflow-hidden">
      {/* Header */}
      <div className="bg-cinza-900 px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-dourado/20 flex items-center justify-center">
            <Calculator className="w-6 h-6 text-dourado" />
          </div>
          <div>
            <h2 className="text-h3 text-white">Calculadora de ROI</h2>
            <p className="text-cinza-400 text-sm">
              Descubra quanto você pode economizar com o DoctorAI
            </p>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Inputs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Consultas por dia */}
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-cinza-700 font-medium flex items-center gap-2">
                <Users className="w-4 h-4 text-dourado" />
                Consultas por dia
              </span>
              <span className="text-lg font-bold text-dourado">{consultasPerDay}</span>
            </label>
            <input
              type="range"
              min={limits.consultasPerDay.min}
              max={limits.consultasPerDay.max}
              value={consultasPerDay}
              onChange={(e) => setConsultasPerDay(Number(e.target.value))}
              className="w-full h-2 bg-cinza-200 rounded-lg appearance-none cursor-pointer accent-dourado"
            />
            <div className="flex justify-between text-xs text-cinza-500">
              <span>{limits.consultasPerDay.min}</span>
              <span>{limits.consultasPerDay.max}</span>
            </div>
          </div>

          {/* Minutos por prontuário */}
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-cinza-700 font-medium flex items-center gap-2">
                <Clock className="w-4 h-4 text-dourado" />
                Minutos por prontuário
              </span>
              <span className="text-lg font-bold text-dourado">{minutesPerRecord} min</span>
            </label>
            <input
              type="range"
              min={limits.minutesPerRecord.min}
              max={limits.minutesPerRecord.max}
              value={minutesPerRecord}
              onChange={(e) => setMinutesPerRecord(Number(e.target.value))}
              className="w-full h-2 bg-cinza-200 rounded-lg appearance-none cursor-pointer accent-dourado"
            />
            <div className="flex justify-between text-xs text-cinza-500">
              <span>{limits.minutesPerRecord.min} min</span>
              <span>{limits.minutesPerRecord.max} min</span>
            </div>
          </div>

          {/* Dias por semana */}
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-cinza-700 font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-dourado" />
                Dias de trabalho/semana
              </span>
              <span className="text-lg font-bold text-dourado">{daysPerWeek}</span>
            </label>
            <input
              type="range"
              min={limits.daysPerWeek.min}
              max={limits.daysPerWeek.max}
              value={daysPerWeek}
              onChange={(e) => setDaysPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-cinza-200 rounded-lg appearance-none cursor-pointer accent-dourado"
            />
            <div className="flex justify-between text-xs text-cinza-500">
              <span>{limits.daysPerWeek.min} dias</span>
              <span>{limits.daysPerWeek.max} dias</span>
            </div>
          </div>

          {/* Valor da hora */}
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-cinza-700 font-medium flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-dourado" />
                Valor da sua hora
              </span>
              <span className="text-lg font-bold text-dourado">{formatCurrency(hourlyRate)}</span>
            </label>
            <input
              type="range"
              min={limits.hourlyRate.min}
              max={limits.hourlyRate.max}
              step={10}
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2 bg-cinza-200 rounded-lg appearance-none cursor-pointer accent-dourado"
            />
            <div className="flex justify-between text-xs text-cinza-500">
              <span>{formatCurrency(limits.hourlyRate.min)}</span>
              <span>{formatCurrency(limits.hourlyRate.max)}</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-cinza-50 rounded-2xl p-6 mb-8">
          <h3 className="text-cinza-700 font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-verde" />
            Seus Resultados com DoctorAI
          </h3>

          <div className="grid md:grid-cols-4 gap-4">
            {/* Horas economizadas */}
            <div className="bg-white rounded-xl p-4 text-center shadow-soft">
              <Clock className="w-8 h-8 text-dourado mx-auto mb-2" />
              <p className="text-3xl font-bold text-cinza-900">{results.hoursSavedPerMonth}h</p>
              <p className="text-cinza-500 text-sm">economizadas/mês</p>
            </div>

            {/* Economia financeira */}
            <div className="bg-white rounded-xl p-4 text-center shadow-soft">
              <DollarSign className="w-8 h-8 text-verde mx-auto mb-2" />
              <p className="text-3xl font-bold text-verde">{formatCurrency(results.moneySavedPerMonth)}</p>
              <p className="text-cinza-500 text-sm">economia/mês</p>
            </div>

            {/* ROI */}
            <div className="bg-white rounded-xl p-4 text-center shadow-soft">
              <TrendingUp className="w-8 h-8 text-azul mx-auto mb-2" />
              <p className="text-3xl font-bold text-azul">{results.roiPercentage}%</p>
              <p className="text-cinza-500 text-sm">ROI mensal</p>
            </div>

            {/* Consultas adicionais */}
            <div className="bg-white rounded-xl p-4 text-center shadow-soft">
              <Users className="w-8 h-8 text-dourado mx-auto mb-2" />
              <p className="text-3xl font-bold text-cinza-900">+{results.additionalConsultations}</p>
              <p className="text-cinza-500 text-sm">consultas possíveis</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="border border-cinza-200 rounded-2xl p-6 mb-8">
          <h3 className="text-cinza-700 font-semibold mb-4">Comparativo de Tempo</h3>

          <div className="space-y-4">
            {/* Sem DoctorAI */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-cinza-600 text-sm">Sem DoctorAI</span>
                <span className="text-cinza-900 font-semibold">{results.currentTimeHours}h/mês</span>
              </div>
              <div className="h-4 bg-cinza-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-vermelho/70 rounded-full transition-all duration-500"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            {/* Com DoctorAI */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-cinza-600 text-sm">Com DoctorAI</span>
                <span className="text-verde font-semibold">{results.timeWithDoctorAI}h/mês</span>
              </div>
              <div className="h-4 bg-cinza-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-verde rounded-full transition-all duration-500"
                  style={{ width: `${(results.timeWithDoctorAI / results.currentTimeHours) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <p className="text-center text-cinza-500 text-sm mt-4">
            O DoctorAI reduz em <span className="font-bold text-dourado">80%</span> o tempo de documentação
          </p>
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="text-center">
            <a
              href="https://buy.stripe.com/6oU4gA1cw3RL4OJ4aG2Ji0u"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-3 shadow-glow hover:shadow-glow-lg transition-all"
            >
              Começar a Economizar
              <ChevronRight className="w-5 h-5" />
            </a>
            <p className="text-cinza-500 text-sm mt-3">
              Investimento: R$ 147/mês | Retorno: {formatCurrency(results.moneySavedPerMonth)}/mês
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
