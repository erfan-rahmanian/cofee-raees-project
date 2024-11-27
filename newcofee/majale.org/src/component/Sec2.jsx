import React, { useState } from 'react';

const ArticleCard = ({ image, title, date, excerpt }) => (
  <div dir="rtl" className="card h-100 transition  ">
    <div className="overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="card-img-top article-image"
        style={{ height: '250px', objectFit: 'cover' }}
      />
    </div>
    <div className="card-body text-end">
      <a href="#" className="text-decoration-none">
        <h3 className="card-title h5 text-dark mb-3">
          {title}
        </h3>
      </a>
      <div className="d-flex align-items-center justify-content-start text-muted small mb-3">
      <svg 
          width={16} 
          height={16} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth={2}
          className="text-success"
        >
          <circle cx={12} cy={12} r={10} />
          <path d="M12 6v6l4 2" />
        </svg>
        <span className="me-2">{date}</span>
        
      </div>
      <p className="card-text text-muted small">
        {excerpt}
      </p>
    </div>
  </div>
);

const articlesData = {
  all: [
    {
      image: "https://raeescoffee.com/mag/wp-content/uploads/2024/07/تاثیرات-کافئین-در-بدن-1024x683.jpg",
      title: "اثرات کافئین بر بدن انسان",
      date: "۱۴۰۳/۰۴/۱۸",
      excerpt: "اثرات کافئین بر بدن، شامل طیف گسترده‌ای از اثرات مثبت..."
    },
    {
      image: "https://raeescoffee.com/mag/wp-content/uploads/2024/05/sustainability-web-1024x683.jpg",
      title: "چرا آموزش پایداری اهمیت دارد؟",
      date: "۱۴۰۳/۰۳/۰۱",
      excerpt: "رسیدن به معنی پایداری (Sustainability) که در حقیقت ایجاد فضای..."
    },
    {
      image: "https://raeescoffee.com/mag/wp-content/uploads/2024/05/تاثیر-قهوه-بر-لاغری-1024x683.jpg",
      title: "تاثیر قهوه بر لاغری، بررسی علمی",
      date: "۱۴۰۳/۰۲/۲۵",
      excerpt: "قهوه یکی از محبوب‌ترین نوشیدنی‌های جهان است و به دلیل..."
    }
  ],
  specialized: [
    {
      image: "https://raeescoffee.com/mag/wp-content/uploads/2024/05/تاثیر-قهوه-بر-لاغری-1024x683.jpg",
      title: "روش‌های تخصصی دم کردن قهوه",
      date: "۱۴۰۳/۰۴/۱۰",
      excerpt: "آشنایی با تکنیک‌های پیشرفته دم کردن قهوه برای باریستاها..."
    },
    {
      image: "https://raeescoffee.com/mag/wp-content/uploads/2024/07/تاثیرات-کافئین-در-بدن-1024x683.jpg",
      title: "انواع رست‌های تخصصی قهوه",
      date: "۱۴۰۳/۰۳/۱۵",
      excerpt: "بررسی تخصصی انواع رست‌های قهوه و تاثیر آن بر طعم..."
    },
    {
      image: "https://raeescoffee.com/mag/wp-content/uploads/2024/05/sustainability-web-1024x683.jpg",
      title: "کالیبراسیون آسیاب قهوه",
      date: "۱۴۰۳/۰۲/۲۰",
      excerpt: "راهنمای تخصصی تنظیم آسیاب قهوه برای نتیجه بهتر..."
    }
  ],
  research: [
    {
      image: "https://raeescoffee.com/mag/wp-content/uploads/2024/07/تاثیرات-کافئین-در-بدن-1024x683.jpg",
      title: "تحقیقات جدید درباره خواص قهوه",
      date: "۱۴۰۳/۰۴/۲۰",
      excerpt: "بررسی آخرین یافته‌های علمی درباره فواید قهوه..."
    },
    {
      image: "https://raeescoffee.com/mag/wp-content/uploads/2024/05/sustainability-web-1024x683.jpg",
      title: "مطالعات زیست محیطی تولید قهوه",
      date: "۱۴۰۳/۰۳/۲۵",
      excerpt: "تحقیقات جامع درباره تاثیرات زیست محیطی کشت قهوه..."
    },
    {
      image: "https://raeescoffee.com/mag/wp-content/uploads/2024/05/تاثیر-قهوه-بر-لاغری-1024x683.jpg",
      title: "پژوهش‌های ژنتیکی گیاه قهوه",
      date: "۱۴۰۳/۰۲/۳۰",
      excerpt: "مطالعات اخیر در زمینه اصلاح ژنتیکی گیاه قهوه..."
    }
  ]
};

const tabs = [
  { id: 'all', label: 'قهوه برای همه' },
  { id: 'specialized', label: 'تخصصی' },
  { id: 'research', label: 'تحقیقی' }
];

const styles = `
.transition {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.nav-tabs {
  display: flex;
  width: 100%;
  border-bottom: 2px solid var(--bs-success);
}

.nav-tabs .nav-link {
  flex: 1;
  text-align: center;
  border: none;
  color: var(--text-color);
  padding: 12px 25px;
  transition: all 0.3s ease;
  font-weight: 500;
  margin: 0;
  border-radius: 0 !important;
}

.nav-tabs .nav-link:hover:not(.active) {
  background-color: #BDE8CA;
  border: none;
  color: white;
}

.transition:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.article-image {
  transition: transform 0.3s ease;
}

.card:hover .article-image {
  transform: scale(1.05);
}
  .bbjbjbbj{
  
   margin-bottom: 70px;
   margin-top: 40px;
   padding-right: 60px;
    padding-left: 60px;
  }
`;

const ArticleTabs = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <>
      <style>{styles}</style>
      <div dir="rtl" className="container py-4 bbjbjbbj">
        <div className="row mb-4">
          <div className="col-12">
            <div className="nav nav-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`nav-link position-relative 
                    ${activeTab === tab.id 
                      ? 'active bg-success text-white' 
                      : 'text-dark'
                    }
                  `}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div 
                      className="position-absolute start-50 translate-middle-x" 
                      style={{
                        bottom: '-8px',
                        width: '0',
                        height: '0',
                        borderLeft: '8px solid transparent',
                        borderRight: '8px solid transparent',
                        borderTop: '8px solid var(--bs-success)'
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 mx-5">
          {articlesData[activeTab].map((article, index) => (
            <div key={index} className="col ">
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleTabs;