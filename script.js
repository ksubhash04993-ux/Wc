function openResult() {
  const regNo = document.getElementById("reg").value;
  const sem = document.getElementById("sem").value;
  const session = document.getElementById("session").value;

  if (!regNo) {
    alert("Please enter Registration Number");
    return;
  }

  const link = `https://beu-bih.ac.in/result-three?name=B.Tech.%20${sem}%20Semester%20Examination,%20${session}&semester=${sem}&session=${session}&regNo=${regNo}&exam_held=November%2F${session}`;

  document.getElementById("output").innerHTML = `
    <a href="${link}" target="_blank">Open Result</a>
  `;
}
