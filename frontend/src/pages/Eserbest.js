import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Eserbest = () => {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            {/* ======= Why Us Section ======= */}
            <section id="why-us" className="why-us section-bg">
                <div className="container-fluid" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                            <div className="content">
                                <h3>E-SERBEST MESLEK MAKBUZU NEDİR?</h3>
                                <p>
                                    Kağıt serbest meslek makbuzu ile aynı hukuki niteliklere sahip olan elektronik belgedir.
                                    E-Serbest Meslek Makbuzu uygulaması, serbest meslek erbabı olup hukuk, muhasebe, denetim, tıp, mimar, mühendislik vb. alanlarda, vekil, danışman, müşavir, denetçi, arabulucu, aracı, mimar, mühendis vb. adlar altında serbest meslek faaliyetinde bulunanların, mesleki faaliyetlerine ilişkin tahsilatları için düzenledikleri serbest meslek makbuzlarının elektronik ortamda izlenebilmesi amacıyla getirilmiştir.

                                </p>
                            </div>
                            <div className="accordion-list">
                                <ul>
                                    <li>
                                        <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span>E-Serbest Meslek Makbuzu Avantajları<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                            <p>İşlemleri dijital ortama taşıyan E-Serbest Meslek Makbuzu sayesinde basım ve arşiv gibi masraflar ortadan kalkar.</p>
                                            <p>Dijital ortamda gerçekleştiren E-Serbest Meslek Makbuz, kağıt tüketimini ortadan kaldırır çevreyi korur.</p>
                                            <p>Eski serbest meslek makbuzlarınıza, E-Serbest Meslek Makbuz ile tek tıkla hızlı ve rahatça ulaşabilirsiniz.</p>
                                            <p>Elektronik ortama taşınan veriler, E-Serbest Meslek Makbuz çözümünde  kaybolmaz.</p>

                                        </div>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> E-Serbest Meslek Kullanım Zorunluluğu Ne Zaman Başlıyor?<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                Serbest meslek makbuzu belgelerinin elektronik ortamda düzenlenme, iletilme ve muhafazasına imkan veren “Vergi Usul Kanunu Genel Tebliğ Taslağı” yayınlandı. Taslakda, yaygın olarak kullanılan belgeler arasında yer alan “serbest meslek makbuzu” belgelerinin kağıt belge yerine, elektronik ortamda; elektronik belge olarak düzenlenmesi, iletilmesi ile muhafaza ve ibraz edilebilmesine ilişkin düzenlemeler yer almaktadır.
                                                Tebliğ taslağında mükelleflerden gerekli şartları yerine getirdiği değerlendirilenler E-Serbest meslek makbuzu düzenleyecektir.
                                            </p>

                                        </div>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Uygulamadan Yararlanma Yöntemleri ve Başvuru Esasları:
                                            Mükellefler E-Serbest meslek makbuzu uygulamasından;
                                            <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                Kendi bilgi işlem sistemlerinin Başkanlık sistemlerine entegrasyonu yoluyla
                                            </p>
                                            <p>e-Serbest meslek makbuzu uygulamasına ait temel fonksiyonların internet üzerinden genel kullanımını sağlamak amacı ile Başkanlık tarafından oluşturulan ve http://www.efatura.gov.tr internet adresinde hizmete sunulan GİB Portalı aracılığıyla,</p>
                                            <p>Başkanlıktan izin almış özel entegratörlerin bilgi işlem sistemleri aracılığıyla, olmak üzere üç yöntemden herhangi birini seçerek yararlanabileceklerdir.</p>
                                            <p>Mükellefler, 1 ve 2 maddelerinde belirtilen yöntemlerden biri ile uygulamaya dahil
                                                olmak istediklerinde; Gelir İdaresi Başkanlığının “www.efatura.gov.tr” internet adresinde yayımlanan ilgili klavuzlara uygun olarak E-serbest meslek makbuzu Uygulamasına ilişkin gerekli başvuru işlemlerini yerine getirmeleri gerekmektedir.
                                                E-Serbest meslek makbuzu uygulamasına 3. maddede belirtilen yöntemle dahil olmak isteyen mükellefler; doğrudan Başkanlıktan izin almış özel entegratörlerden herhangi birine başvuracak olup, ayrıca Başkanlığa başvuruda bulunmalarına gerek bulunmamaktadır.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" className="collapsed"><span>04</span> E-Serbest meslek makbuzu Kullanma Taleplerinin Değerlendirilmesi ve İzin
                                            <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="accordion-list-4" className="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                E-Serbest meslek makbuzu uygulamasından kendi bilgi işlem sistemlerinin Başkanlık (GİB) sistemlerine entegrasyonu yöntemiyle yararlanmak için Başkanlığa yapılan başvurular; Başkanlık tarafından mükellefe ait sistemin yapısı, işleyişi ile bu Tebliğde ve http://www.efatura.gov.tr internet adresinde yayımlanan teknik kılavuzlarda belirlenen usul ve esaslara uygunlığu değerlendirilecektir. Başkanlık gerek görmesi halinde ilave teknik bilgi ve belge talebinde bulunabilecektir.
                                            </p>
                                            <p>Başkanlıkça yapılacak değerlendirme sonrasında başvuruları uygun bulunan ve test süreçlerini başarılı bir şekilde tamamlayan mükelleflere E-serbest meslek makbuzu Uygulamasından kendi bilgi işlem sistemlerinin Başkanlık sistemlerine entegrasyonu yöntemiyle yararlanmasına ilişkin olarak izin verilecektir.</p>
                                            <p>Değerlendirme aşamasında eksiklikleri tespit edilen mükelleflere, söz konusu eksiklikleri gidermeleri için en çok bir yıl süre verilir. Bu süre içerisinde eksikliklerini gidermeyen mükelleflerin başvuruları reddedilir.</p>
                                            <p>Başvuruları reddedilen mükelleflerin reddi izleyen bir yıl içerisinde yapacakları
                                                başvurular kabul edilmeyecektir. Bu durum, mükelleflerin E-Serbest meslek makbuzu Uygulaması kapsamında GİB Portal ya da özel entegratörlük izni alan mükellefler vasıtasıyla E-serbest meslek makbuzu uygulamasından yararlanmalarına engel teşkil etmez.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-5" className="collapsed"><span>05 E-Serbest Meslek Makbuzu Uygulamasına Geçiş Zorunluluğu:</span>
                                            <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="accordion-list-5" className="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                2016 yılı gayri safi hasılatı (kollektif, adi komandit şirket veya adi ortaklık halinde faaliyet gösterenlerin bu ortaklıklardan aldıkları paylar dahil) 50 bin TL ve üzeri olan serbest meslek erbaplarının 1/7/2018 tarihine kadar uygulamaya dahil olması ve bu tarihlerden itibaren serbest meslek makbuzu belgelerini E-Serbest Meslek Makbuzu olarak düzenlemeleri zorunludur.
                                            </p>
                                            <p>
                                                1/1/2019 tarihinden itibaren ise; gayrisafi hasılat tutarına bakılmaksızın tüm serbest meslek erbaplarının, söz konusu uygulamaya dahil olması ve bu tarihten itibaren serbest meslek makbuzu belgelerini E-Serbest Meslek Makbuzu olarak düzenlemeleri zorunludur.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{ backgroundImage: 'url("assets/img/why-us.png")' }} data-aos="zoom-in" data-aos-delay={150}>&nbsp;</div>
                    </div>
                </div>
            </section>{/* End Why Us Section */}
            <Footer />
        </React.Fragment>
    )
}

export default Eserbest