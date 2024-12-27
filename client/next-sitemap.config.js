/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL_FRONT || 'http://localhost:3000',
    generateRobotsTxt: true, // (اختیاری) برای تولید فایل robots.txt
    exclude: ['/auth/*'], // مسیرهایی که نمی‌خواهید در سایت‌مپ باشند
  };