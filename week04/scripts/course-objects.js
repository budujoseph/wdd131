// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    section: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T",
        },

        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 25,
            days: "TTh",
            instructor: "Sis A",
        },
    ],

};

    function setCourseInfo() {
        const courseName = document.getElementById(courseName);
        const courseCode = document.getElementById(courseCode);
            
        courseName.textContent = aCourseourse.name;
        courseCode.textContent = aCourseourse.code;
    }

    function sectionTemplate(section) {
        return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    }

    function renderSections(sections) {
        const html = sections.map(sectionTemplate);
        document.getElementById(sections).innerHTML = html.join();
    }

    setCourseInfo(aCourse);
    renderSections(aCourse.section);


    
  