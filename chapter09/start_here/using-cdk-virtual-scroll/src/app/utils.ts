export const compareVersion = (version1, version2) => {
  const ver1 = version1.split('.').map((f: string) => Number(f));
  const ver2 = version2.split('.').map((f: string) => Number(f));
  const maxLength = Math.max(ver1.length, ver2.length);
  for (let i = 0, len = maxLength; i < len; ++i ) {
      const num1 = ver1[i] || 0;
      const num2 = ver2[i] || 0;
      if (num1 < num2) {
          return -1;
      } else if (num1 > num2) {
          return 1;
      }
  }

  return 0;
};
