function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let result = [];
   function onClick() {
      let input = JSON.parse(document.getElementById("inputs").children[1].value);
      let bestRestaurantInfo = document.querySelector("#bestRestaurant p");
      let bestWorkersInfo = document.querySelector("#workers p");
      for (let ele of input) {
         let [restautant, workers] = ele.split(" - ");
         if (!result.find(e => e.name === restautant)) {
            result.push({
               name: restautant,
               avgSalary: 0,
               bestSalary: 0,
               sumSalary: 0,
               workers: []
            });
         }
         let currentRestaurant = result.find(e => e.name === restautant);
         workers = workers.split(", ");
         for (let worker of workers) {
            updateRestaurant(currentRestaurant, worker);
         }
      }

      let bestRestaurant = result.sort((a, b) => b.avgSalary - a.avgSalary)[0];
      bestRestaurantInfo.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      let sortListOfWorker = bestRestaurant.workers.sort((a, b) => b.salary - a.salary);
      let res = "";
      for (let worker of sortListOfWorker) {
         res += `Name: ${worker.name} With Salary: ${worker.salary}`;
      }
      bestWorkersInfo.textContent += res;

      function updateRestaurant(obj, worker) {
         let [name, salary] = worker.split(" ");
         salary = Number(salary);
         obj.sumSalary += salary;
         if (obj.bestSalary < salary) {
            obj.bestSalary = salary;
         }
         obj.workers.push({
            name,
            salary
         });
         obj.avgSalary = obj.sumSalary / obj.workers.length;
      }
   }
}