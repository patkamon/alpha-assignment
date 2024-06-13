export const formatNumber = (num: number): string =>
{
  if (num >= 1_000_000)
  {
    return (num / 1_000_000).toFixed(2) + 'M';
  } else if (num >= 1_000)
  {
    return (num / 1_000).toFixed(2) + 'K';
  } else
  {
    return num.toFixed(2);
  }
};

export const ethMantissa = 1e18;
export const blocksPerDay = 7200; // 12 seconds per block
export const daysPerYear = 365;


export const getApy = (ratePerBlock: number): number =>
{
  return (Math.pow(
    (ratePerBlock / ethMantissa) * blocksPerDay + 1,
    daysPerYear
  ) -
    1) *
    100;
}