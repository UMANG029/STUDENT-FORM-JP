function validateAndGetFormData() {
  let rollNo = $("#rollNo").val().trim();
  let fullName = $("#fullName").val().trim();
  let Class = $("#class").val().trim();
  let birthDate = $("#birthDate").val().trim();
  let address = $("#address").val().trim();
  let enrollmentDate = $("#enrollmentDate").val().trim();

  if (rollNo === "") {
    alert("Roll No is required!");
    $("#rollNo").focus();
    return "";
  }
  if (fullName === "") {
    alert("Full Name is required!");
    $("#fullName").focus();
    return "";
  }
  if (Class === "") {
    alert("Class is required!");
    $("#class").focus();
    return "";
  }
  if (birthDate === "") {
    alert("Birth Date is required!");
    $("#birthDate").focus();
    return "";
  }
  if (address === "") {
    alert("Address is required!");
    $("#address").focus();
    return "";
  }
  if (enrollmentDate === "") {
    alert("Enrollment Date is required!");
    $("#enrollmentDate").focus();
    return "";
  }
  if (isNaN(rollNo)) {
    alert("Roll No should be a number!");
    $("#rollNo").focus();
    return "";
  }
  if (rollNo <= 0) {
    alert("Roll No should be a positive number!");
    $("#rollNo").focus();
    return "";
  }
  if (!/^\d+$/.test(rollNo)) {
    alert("Roll No must contain only digits!");
    $("#rollNo").focus();
    return "";
  }

  return JSON.stringify({
    RollNo: rollNo,
    FullName: fullName,
    Class: Class,
    BirthDate: birthDate,
    Address: address,
    EnrollmentDate: enrollmentDate,
  });
}

function resetForm() {
  $("#rollNo").val("");
  $("#fullName").val("");
  $("#class").val("");
  $("#birthDate").val("");
  $("#address").val("");
  $("#enrollmentDate").val("");
  $("#rollNo").prop("disabled", false);
  $("#save").prop("disabled", true);
  $("#change").prop("disabled", true);
  $("#reset").prop("disabled", true);
  $("#rollNo").focus();
}

function saveData() {
  console.log("saveData");
  let jsonData = validateAndGetFormData();
  if (!jsonData) return;

  const connToken = "90934664|-31949205335754090|90956087";
  const dbName = "SCHOOL-DB";
  const relName = "STUDENT-TABLE";
  const baseUrl = "http://api.login2explore.com:5577";
  const apiEndPoint = "/api/iml";
  const apiEndPoint2 = "/api/irl";

  let putRequest = createPUTRequest(connToken, jsonData, dbName, relName);
  jQuery.ajaxSetup({ async: false });
  let resultObj = executeCommandAtGivenBaseUrl(
    putRequest,
    baseUrl,
    apiEndPoint
  );
  jQuery.ajaxSetup({ async: true });
  console.log("Data saved:\n" + JSON.stringify(resultObj));
  resetForm();
  alert("Data saved successfully!");
  $("#rollNo").focus();
}

function checkRollNoExists() {
  const connToken = "90934664|-31949205335754090|90956087";
  const dbName = "SCHOOL-DB";
  const relName = "STUDENT-TABLE";
  const baseUrl = "http://api.login2explore.com:5577";

  const apiEndPoint2 = "/api/irl";
  let rollNo = $("#rollNo").val().trim();
  let jsonStr = {
    RollNo: rollNo,
  };
  jsonStr = JSON.stringify(jsonStr);

  let GetByKeyRequest = createGET_BY_KEYRequest(
    connToken,
    dbName,
    relName,
    jsonStr
  );
  jQuery.ajaxSetup({ async: false });
  let resultObj = executeCommandAtGivenBaseUrl(
    GetByKeyRequest,
    baseUrl,
    apiEndPoint2
  );
  jQuery.ajaxSetup({ async: true });
  if (resultObj.status === 400) {
    console.log("Data not found");
    $("#save").prop("disabled", false);
    $("#change").prop("disabled", true);
    $("#reset").prop("disabled", false);
    $("#fullName").focus();
  } else if (resultObj.status === 200) {
    console.log("Data found");
    let data = JSON.parse(resultObj.data).record;

    localStorage.setItem("rec_no", JSON.parse(resultObj.data).rec_no);

    $("#fullName").val(data.FullName);
    $("#class").val(data.Class);
    $("#birthDate").val(data.BirthDate);
    $("#address").val(data.Address);
    $("#enrollmentDate").val(data.EnrollmentDate);
    $("#rollNo").prop("disabled", true);
    $("#save").prop("disabled", true);
    $("#change").prop("disabled", false);
    $("#reset").prop("disabled", false);
    $("#fullName").focus();
  }
  console.log(resultObj);
}

function changeData() {
  const connToken = "90934664|-31949205335754090|90956087";
  const dbName = "SCHOOL-DB";
  const relName = "STUDENT-TABLE";
  const baseUrl = "http://api.login2explore.com:5577";
  const apiEndPoint = "/api/iml";

  $("#change").prop("disabled", true);
  let rec_no = localStorage.getItem("rec_no");
  console.log("rec_no: " + rec_no);
  let jsonData = validateAndGetFormData();
  if (!jsonData) return;
  let updateRequest = createUPDATERecordRequest(
    connToken,
    jsonData,
    dbName,
    relName,
    rec_no
  );
  jQuery.ajaxSetup({ async: false });
  let resultObj = executeCommandAtGivenBaseUrl(
    updateRequest,
    baseUrl,
    apiEndPoint
  );
  jQuery.ajaxSetup({ async: true });
  console.log("Data updated:\n" + JSON.stringify(resultObj));
  resetForm();
  $("#rollNo").focus();
  alert("Data updated successfully!");
}
