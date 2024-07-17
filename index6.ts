const generateParenthesis = (n: number): string[] => {
    const results: string[][] = [[""], ["()"]];
  
    for (let i = 2; i <= n; i++) {
      const result: string[] = [];
      for (let j = 1; j <= i; j++) {
        const leftInner = results[j - 1];
        const right = results[i - j];
        leftInner.forEach((itemLeft) => {
          right.forEach((itemRight) => {
            result.push(`(${itemLeft})${itemRight}`);
          });
        });
      }
      results[i] = result;
    }
  
    return results[n];
  };
  