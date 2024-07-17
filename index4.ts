/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s: string, p: string): boolean => {
    const check = (s: string, p: string, i: number, j: number): boolean => {
      if (j > p.length - 1) {
        return i > s.length - 1;
      }
  
      const isNextQuantiyModifier = p[j + 1] === "*";
  
      if (!isNextQuantiyModifier) {
        if ([s[i], "."].includes(p[j])) {
          return i < s.length && check(s, p, i + 1, j + 1);
        } else {
          return false;
        }
      } else {
        if ([s[i], "."].includes(p[j])) {
          return check(s, p, i, j + 2) || (i < s.length && check(s, p, i + 1, j));
        } else {
          return check(s, p, i, j + 2);
        }
      }
    };
  
    return check(s, p, 0, 0);
  };
  