let salary = parseFloat(prompt('Enter Salary amount'));
let period = parseInt(prompt("Enter period.(1 for monthly salary, 12 for annual salary."))
let disabled = prompt('Do you have a disability exemption certificate?(true/false)') === false;
let allowableOwnerOccupierInterest = parseFloat(prompt("Enter the allowable owner-occupier interest:"));
let pensionContribution;
let insuranceRelief = 5000;
let personalRelief = 2400;
let housingRelief = 9000;



//Calculate the total salary based on the given period
function totalSalary (salary,period){
    const monthly = 1;
    const annual = 12;
    if(period === monthly){
        return salary * monthly;
    } else {
        return salary * annual;
    }

}

let grossSalary = totalSalary(salary,1);
console.log (`Gross Salary: ${grossSalary}`);


//calculate the taxable salary
function taxSalary(allowableOwnerOccupierInterest, grossSalary,) {
    pensionContribution = 20000;
    allowableOwnerOccupierInterest = 25000;
    let taxableSalary = (grossSalary -(allowableOwnerOccupierInterest + pensionContribution));
    return taxableSalary
}

let taxableSalary = taxSalary(allowableOwnerOccupierInterest, grossSalary, pensionContribution);
console.log(`Taxable Salary: ${taxableSalary}`);


//calculate the tax from the taxable salary
function tax (){
    if (taxableSalary <= 24000){
        return taxableSalary *0.1;
    }
    else if (taxableSalary > 24000 && taxableSalary <=32333){
        return taxableSalary * 0.25;

    }
    else{
        taxableSalary > 32333;
        return taxableSalary * 0.3;
    }
}


let totalTax = console.log(`Total tax; ${tax()}`);


//calculate the tax exemption of disabled people
function  disabilityExemption(totalTax, disabled){
    if(disabled === false){
        return "Not eligible for tax exemption."
    }
    else{
        disabled === true
        const exemption = 150000;
        if(totalTax < exemption){
            return 0;
        }
        else{
            totalTax > exemption;
            return totalTax - exemption;
        }
    }
}

let exemptedTax =  disabilityExemption(totalTax, true);
console.log(`Exempted Tax: ${exemptedTax}`);


//calculate the total tax relief
function relief(insuranceRelief,housingRelief, personalRelief){
    let  totalRelief = personalRelief + insuranceRelief + housingRelief;
    return totalRelief;
}

totalRelief = relief(insuranceRelief,housingRelief, personalRelief);

console.log (`Sum total of relief: ${totalRelief}`);
 

//calculate nhif deductions
function nhif(grossSalary){
    let deduction;
    if(grossSalary <=5999){
        deduction = 150;
        return deduction;
    }
    else if(grossSalary >= 6000 && grossSalary <=7999){
        deduction = 300;
        return deduction;
    }
    else if(grossSalary >= 8000 && grossSalary <= 11999){
        deduction = 400;
        return deduction;
    }
    else if(grossSalary >= 12000 && grossSalary <=14999){
        deduction = 500;
        return deduction;
    }
    else if(grossSalary >= 15000 && grossSalary <=19999){
        deduction = 600;
        return deduction;
    }
    else if (grossSalary >= 20000 && grossSalary <= 24999){
        deduction = 750;
        return deduction;
    }
    else if (grossSalary >=25000 && grossSalary <=29999){
        deduction = 850;
        return deduction;
    }
    else if (grossSalary >=30000 && grossSalary <=34999){
        deduction = 900;
        return deduction;
    }
    else if (grossSalary >=35000 && grossSalary <=39999){
        deduction = 950;
        return deduction;
    }
    else if (grossSalary >=40000 && grossSalary <=44999){
        deduction = 1000;
        return deduction;
    }
    else if (grossSalary >=45000 && grossSalary <=49999){
        deduction = 1100;
        return deduction;
    }
    else if (grossSalary >=50000 && grossSalary <=59999){
        deduction = 1200;
        return deduction;
    }
    else if (grossSalary >=60000 && grossSalary <=69999){
        deduction = 1300;
        return deduction;
    }
    else if (grossSalary >=70000 && grossSalary <=79999){
        deduction = 1400;
        return deduction;
    }
    else if (grossSalary >=80000 && grossSalary <=89999){
        deduction = 1500;
        return deduction;
    }
    else if (grossSalary >=90000 && grossSalary <=99999){
        deduction = 1600;
        return deduction;
    }
    else {
        return deduction =1700;
    }
}

let nhifDeduction =nhif(grossSalary);
console.log(`NHIF Deduction: ${nhifDeduction}`);


//calculate nssf deductions
let pensionablePay = grossSalary;

function nssf(pensionablePay){
    if(pensionablePay <= 6000){
        Tier1 = pensionablePay * 0.06;
        return Tier1;
    } 
    else (pensionablePay >6000 && pensionablePay <=18000); {
        Tier2 =(6000 * 0.06) + ((pensionablePay-6000)*0.06);
        return Tier2;
    }
}


let nssfDeduction = nssf(pensionablePay);
console.log(`NSSF deduction; ${nssfDeduction}`);

//calculate total deductions and the net salary
let totalDeductions = totalTax + nhifDeduction + nssfDeduction;
let netSalary = (taxableSalary  + totalRelief) - totalDeductions;


console.log(`Net Salary: ${netSalary}`);

