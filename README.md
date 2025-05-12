# Student Enrollment Form using JPDB API

This is a simple web-based application to manage student records. It uses JSONPowerDB as the backend database and jQuery for frontend scripting. The application supports basic operations like adding, updating, and viewing student data by Roll Number.

---

## Description

This project is a minimalistic student data entry system that demonstrates how to interact with JPDB (JsonPowerDB) using REST API calls in JavaScript. It allows users to:
- Add new student records
- Check if a student already exists
- Update student details
- Reset the form to default state

The interface is form-based and user-friendly, designed for quick testing and learning about API-based applications.

---

## Benefits of using JsonPowerDB

- Extremely lightweight and fast
- Serverless and instantly usable
- Built-in query language for JSON
- Secure token-based authentication
- Perfect for prototyping and learning backend integration
- No need for complex backend setup

---

## Scope of Functionalities

- Roll Number-based lookup
- Full form validation before save/update
- Data storage and retrieval using JPDB APIs
- Updates handled using record number saved in local storage
- Toggle control of button states and field focus

---

## Examples of Use

- Add Student: Fill in all the fields and click “Save”.
- Check Student: Enter Roll No → Press Tab → Auto-fetches data if it exists.
- Update Student: Modify the fields and click “Update”.
- Reset: Clears all form inputs and resets state.

---

## Release History

Version 1.0 – May 12, 2025  
Initial release with full functionality: add, check, update, and reset student data.

---

## Illustrations

Here is how the form looks in the browser:

![Screenshot 2025-05-12 232223](https://github.com/user-attachments/assets/dd1a0f2e-9857-40f7-852e-b238f33291b6)

## Project Status

✅ Functional and complete.  
Planned improvements:
- Add delete functionality
- Pagination or table display for all records
- Enhanced UI with Bootstrap or Tailwind CSS

---

## Sources

- [JSONPowerDB (Official)](https://login2explore.com/)
- [JPDB API Docs](https://login2explore.com/jpdb/docs.html)
- [jQuery API](https://api.jquery.com/)


---

## Other Information

- Form behavior is dynamically controlled via jQuery
- Uses `localStorage` to keep track of record number
- AJAX requests are synchronous for simplicity
- Ideal for learning front-end to back-end interaction

---

Developed by Umang Singh
