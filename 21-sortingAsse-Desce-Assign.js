class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_vinayak = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahesh = new Employee(99,"Mahesh","HR",85000,"Infy");

let arrayEmployees =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinayak,emp_mahesh];


console.log('Q.1 ==================sort the array in descending order on id==================');
const descOrder = arrayEmployees.sort((n1,n2)=>{
   return n1.emp_id > n2.emp_id ? -1 : 1 ;
})

for (const element of arrayEmployees) {
    console.log(element.emp_id , element.emp_name , element.emp_dept); 
}

console.log('Q.2 ==================sort the array in aescending order on department==================');
const aescOrder = arrayEmployees.sort((n1,n2)=>{
    return n1.emp_dept > n2.emp_dept ? 1 : -1 ;
 })
 
 for (const element of arrayEmployees) {
    console.log(element.emp_id , element.emp_dept ,element.emp_company); 
 }

 console.log('Q.3 ==================sort the array in descending order on salary==================');
 const descOrdersalary = arrayEmployees.sort((n1,n2)=>{
    return n1.emp_salary > n2.emp_salary ? -1 : 1 ;
 })
 
 for (const element of arrayEmployees) {
    console.log(element.emp_name , element.emp_salary ,element.emp_company); 
 }


