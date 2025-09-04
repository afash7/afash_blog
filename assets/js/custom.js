function toJalaali(gregorianDate) {
    if (!gregorianDate) return '';
    const date = new Date(gregorianDate);
    if (isNaN(date)) return gregorianDate; // اگر تاریخ نامعتبر بود، همونو برگردون
    const jalaali = jalaali.toJalaali(date.getFullYear(), date.getMonth() + 1, date.getDate());
    return `${jalaali.jy}/${jalaali.jm.toString().padStart(2, '0')}/${jalaali.jd.toString().padStart(2, '0')}`;
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.documentElement.lang === 'fa') {
        // اضافه کردن classهای احتمالی دیگر
        document.querySelectorAll('.article-meta time, .post-date, .date, .article-date, time, .post-meta, .meta-date').forEach(el => {
            const gregDate = el.getAttribute('datetime') || el.textContent.trim();
            el.textContent = toJalaali(gregDate);
        });
        document.querySelectorAll('.archive-item time, footer time, .archive-date').forEach(el => {
            const gregDate = el.getAttribute('datetime') || el.textContent.trim();
            el.textContent = toJalaali(gregDate);
        });
    }
});