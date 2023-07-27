// chrome.storageにコースを保存する
const saveCourse = async (courseId: string, courseName: string) => {
    await chrome.storage.local.set({ [courseId]: courseName })
}

// 全てのコースをchrome.storageに保存する
const saveAllCourse = async () => {
    const courseElems = document.querySelectorAll('.contentnode ul li a');
    const courseArray = Array.from(courseElems);
    await Promise.all(courseArray.map(async (course) => {
        const courseName = course.textContent;
        const courseUrl = course.getAttribute('href');
        const courseId = courseUrl?.split('course=')[1].split('&')[0];
        if (courseName && courseId) {
            await saveCourse(courseId, courseName);
        }
    }));
}

saveAllCourse()