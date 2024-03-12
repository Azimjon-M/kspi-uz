import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-0">
      <div>
        <h1 className="text-4xl font-bold text-center text-[#004269]">
          Bizning maqsadimiz
        </h1>
      </div>
      <div>
        <p className="text-lg md:text-4xl font-light">
          Stenford deyarli 150 yil oldin ijtimoiy maqsadlar uchun asos solingan.
          Bizning vazifamiz talabalarni etakchilik hayotiga va halollik bilan
          hissa qo'shishga o'rgatish orqali dunyoga hissa qo'shishdir;
          fundamental bilimlarni rivojlantirish va ijodkorlikni rivojlantirish;
          samarali klinik davolash uchun kashshof tadqiqotlar yetakchi; va
          yechimlarni tezlashtirish va ularning ta'sirini kuchaytirish.
        </p>
      </div>
      <Link to="">KSPI haqida ko'proq</Link>
    </div>
  );
}

export default AboutUs;
