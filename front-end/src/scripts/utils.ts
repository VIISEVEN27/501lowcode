export function getFuncBody(funcString: string): string {
  const leftBracket = funcString.indexOf('{');
  const rightBracket = funcString.lastIndexOf('}');
  return funcString.slice(leftBracket + 1, rightBracket - 1).trim();
}