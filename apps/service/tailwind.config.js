/** @type {import('tailwindcss').Config} */

(
  module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        backgroundImage: {
          //그림 배경 정의
          "new-car-intro": "url('@/assets/images/newCarIntroBg.webp')",
          "join-event-main": "url('@/assets/images/joinEventMainBg.webp')",
          "miniquiz-paper": "url('@/assets/images/miniQuizBg.webp')",
          // 그라데이션 색상 정의
          "gradient-blue-purple":
            "linear-gradient(90deg, #0128FF 0%, #AD00FF 100%)",
          "gradient-cobaltblue-white":
            "linear-gradient(90deg, #C5F0FF 0%, #FFF 100%)",
          "gradient-violetblue-cobaltblue":
            "linear-gradient(90deg, #8285F6 0%, #C5F0FF 100%)",
          "gradient-lightblue-white":
            "linear-gradient(90deg, #E0EAFF 0%, #FFF 100%)",
          "gradient-cobaltblue-white-opposite":
            "linear-gradient(270deg, #C5F0FF 0%, #FFF 100%)",
          "gradient-lightblue-white-vertical":
            "linear-gradient(180deg, #E0EAFF 0%, #FFF 100%)",
          "gradient-cobaltblue-white-vertical":
            "linear-gradient(180deg, #C5F0FF 0%, #FFF 100%)",
          carCard: "linear-gradient(180deg, #C5F0FF 0%, #FFF 99.95%)",
          toolBoxCard: "linear-gradient(180deg, #E0EAFF 0%, #FFF 99.95%)",
        },
      },
    },
  }
);
