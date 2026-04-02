const students = [
  { name: "Yush Singh", marks: 85, class: "12th", address: "Manipur" },
  { name: "Abhijeet Singh", marks: 91, class: "10th", address: "Assam" },
  { name: "Anil kumar", marks: 90, class: "11th", address: "Manipur" },
  { name: "Salman Ahmed", marks: 80, class: "3rd", address: "India" },
  { name: "Riya Sharma", marks: 85, class: "10th", address: "Delhi" },
  { name: "Rohan Patel", marks: 70, class: "12th", address: "Mumbai" },
  { name: "Priya Singh", marks: 95, class: "8th", address: "Bangalore" },
  { name: "Ankit Gupta", marks: 60, class: "9th", address: "Kolkata" },
  { name: "Neha Verma", marks: 80, class: "11th", address: "Chennai" },
  { name: "Manoj Kumar", marks: 75, class: "10th", address: "Hyderabad" },
  { name: "Pooja Mishra", marks: 78, class: "12th", address: "Pune" },
  { name: "Rajesh Singhania", marks: 92, class: "9th", address: "Jaipur" },
  { name: "Ankit Gupta", marks: 60, class: "9th", address: "Kolkata" },
  { name: "Neha Verma", marks: 80, class: "11th", address: "Chennai" },
  { name: "Manoj Kumar", marks: 75, class: "10th", address: "Hyderabad" },
  { name: "Pooja Mishra", marks: 78, class: "12th", address: "Pune" },
  { name: "Rajesh Singhania", marks: 92, class: "9th", address: "Jaipur" },
  { name: "Rajesh Singhania", marks: 92, class: "9th", address: "Jaipur" }
];

const cardContainer = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");

function displayStudents(data){
  cardContainer.innerHTML = data.map(student => `
    <div class="card">
      <p><strong>Student Name:</strong> ${student.name}</p>
      <p><strong>Marks:</strong> ${student.marks}%</p>
      <p><strong>Class:</strong> ${student.class}</p>
      <p><strong>Address:</strong> ${student.address}</p>
    </div>
  `).join("");
}

displayStudents(students);

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchValue)
  );

  displayStudents(filteredStudents);
});