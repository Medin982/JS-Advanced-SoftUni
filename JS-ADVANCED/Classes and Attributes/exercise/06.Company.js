class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || salary < 0 || !position || !department) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = {
                avgSalary: 0,
                sumSalary: 0,
                employees: []
            }
        }

        this.departments[department].employees.push({ name, salary, position });
        this._calculateSalary(this.departments[department], salary);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepart = Object.entries(this.departments)
            .sort(([depNameOne, depInfoOne], [depNameTwo, depInfoTwo]) => {
              return  depInfoTwo.avgSalary - depInfoOne.avgSalary;
            })[0];

        let sortedEmployees = bestDepart[1].employees
        .sort((a,b) => b.salary - a.salary || a.name.localeCompare(b.name));
        let output = `Best Department is: ${bestDepart[0]}\n`;
        output += `Average salary: ${bestDepart[1].avgSalary.toFixed(2)}\n`;
        sortedEmployees.forEach((e, i) => {
            output += `${e.name} ${e.salary} ${e.position}`;
            output += i === sortedEmployees.length - 1 ? "" : `\n`; 
        });

        return output;
    }


    _calculateSalary(department, salary) {
        department.sumSalary += Number(salary);
        department.avgSalary = department.sumSalary / department.employees.length;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());    