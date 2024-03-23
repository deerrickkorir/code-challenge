function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.1;
    const nhifRate = 0.02;
    const nssfRate = 0.05;
    const totalIncome = basicSalary + benefits;
    const payee = totalIncome * taxRate;
    const nhifDeductions = totalIncome * nhifRate;
    const nssfDeductions = totalIncome * nssfRate;
    const grossSalary = totalIncome - payee - nhifDeductions - nssfDeductions;
    const netSalary = totalIncome - payee - nhifDeductions - nssfDeductions;
    return {
        payee: payee,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        grossSalary: grossSalary,
        netSalary: netSalary
    };
}
