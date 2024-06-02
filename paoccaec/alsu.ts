// Assuming AllPossibleGrades is a union type that may include nullable types
type AllPossibleGrades = 'A' | 'B' | 'C' | null | undefined;

// NamesOnly will be a type that excludes null and undefined from AllPossibleGrades
type NamesOnly = NonNullable<AllPossibleGrades>;

// Usage example
const grade: NamesOnly = 'A'; // This is valid
// const invalidGrade: NamesOnly = null; // This would cause a TypeScript error
