export function tempoParaSegundos(tempo: string): number {
  if (!tempo) return 0;
  const partes = tempo.split(":");

  if (partes.length === 3) {
    const [horas, minutos, segundos] = partes;
    return Number(horas) * 3600 + Number(minutos) * 60 + Number(segundos);
  }

  if (partes.length === 2) {
    const [minutos, segundos] = partes;
    return Number(minutos) * 60 + Number(segundos);
  }

  return Number(tempo) || 0;
}
