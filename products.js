const allProducts = [
    { 
        id: 1, 
        name: "Kaos wangki Polo anak laki-laki", 
        images: ["img/atasanPolo1.jpg", "img/atasanPolo2.jpg", "img/atasanPolo3.jpg"],
        price: 26.135,
        grosirPrice: 26.000,
        minOrder: 12,
        description: "Bahan : cotton \n motif baju :salur \n jahitan :bagus \n \n silahkan order ",
        links: {
            tiktok: "https://vt.tokopedia.com/t/ZS91p96gtbpBf-KXLAj/",
            shopee: "https://s.shopee.co.id/2qOnigUYji",
            wa: "https://wa.me/6285141632570?text=Asalamualaikum, saya mau tanya produk Setelan Anak Kaos Salur Stripe & Celana Cargo Usia 1-5 Tahun - Setelan Lengkap Nyaman untuk Anak-Anak"
        }
    },
    { 
        id: 2, 
        name: "AREA ANAK Atasan Kemeja anak laki-laki",
        images: ["img/atasanSummer1.jpg", "img/atasanSummer2.jpg"],
        price: 50000,
        grosirPrice: 50000,
        minOrder: 12,
        description: "Bahan : knit premium \n motif : kerah wangki",
        links: {
            tiktok: "https://vt.tokopedia.com/t/ZS91pCLjVan1e-pYML6/",
            shopee: "https://s.shopee.co.id/6KyftvEhmu",
            wa: "https://wa.me/6285141632570?text=Asalamualaikum, saya mau tanya produk Kaos Polo Anak Bahan Knit Premium"
        }
    },
    { 
        id: 3, 
        name: "kaos polo anak bahan knit premium",
        images: ["img/kaosPoloAnak1.jpg"],
        price: 43000,
        grosirPrice: 43000,
        minOrder: 6,
        description: "Bahan : knit premium \n unisex",
        links: {
            tiktok: "https://vt.tokopedia.com/t/ZS9eDuQvT3xjr-aDMGH/",
            shopee: "https://s.shopee.co.id/807QFrGjI1",
            wa: "https://wa.me/6285141632570?text=Asalamualaikum, saya mau tanya produk Setelan Anak Hiro Baju Anak Uniseks"
        }
    },
    { 
        id: 4, 
        name: "brave kids Broadstripe",
        images: ["img/bravekidsBroadstripe1.jpg", "img/bravekidsBroadstripe2.jpg"],
        price: 40000,
        grosirPrice: 35000,
        minOrder: 12,
        description: "Bahan: Babyterry Premium & Dropneedle Rib Tebal \n motif : bordir",
        links: {
            tiktok: "https://vt.tokopedia.com/t/ZS9eDXA1TasVX-FLNlk/",
            shopee: "https://s.shopee.co.id/60MLu54FDm",
            wa: "https://wa.me/6285141632570?text=Asalamualaikum, saya mau tanya produk MILMODE SETELAN ANAK KINGSLEY"
        }
    },
    { 
        id: 5, 
        name: "kakathaya Dalvin CelanaAnak",
        images: ["img/kakathayaDalvinCelanaAnak1.jpg"],
        price: 40000,
        grosirPrice: 35000,
        minOrder: 12,
        description: "Bahan: Babyterry Premium & Dropneedle Rib Tebal \n motif : bordir",
        links: {
            tiktok: "https://vt.tokopedia.com/t/ZS9eDXA1TasVX-FLNlk/",
            shopee: "https://s.shopee.co.id/60MLu54FDm",
            wa: "https://wa.me/6285141632570?text=Asalamualaikum, saya mau tanya produk MILMODE SETELAN ANAK KINGSLEY"
        }
    },
    { 
        id: 6, 
        name: "kaos Anak Motif Kucing Kicau Mania",
        images: ["img/kaosAnakMotifKucingKucauMania1.jpg", "img/kaosAnakMotifKucingKucauMania2.jpg"],
        price: 40000,
        grosirPrice: 35000,
        minOrder: 12,
        description: "Bahan: Babyterry Premium & Dropneedle Rib Tebal \n motif : bordir",
        links: {
            tiktok: "https://vt.tokopedia.com/t/ZS9eDXA1TasVX-FLNlk/",
            shopee: "https://s.shopee.co.id/60MLu54FDm",
            wa: "https://wa.me/6285141632570?text=Asalamualaikum, saya mau tanya produk MILMODE SETELAN ANAK KINGSLEY"
        }
    },
    { 
        id: 7, 
        name: "littlevin Setelan Anak Biru",
        images: ["img/littlevinSetelanAnakBiru1.jpg", "img/littlevinSetelanAnakBiru2.jpg"],
        price: 40000,
        grosirPrice: 35000,
        minOrder: 12,
        description: "Bahan: Babyterry Premium & Dropneedle Rib Tebal \n motif : bordir",
        links: {
            tiktok: "https://vt.tokopedia.com/t/ZS9eDXA1TasVX-FLNlk/",
            shopee: "https://s.shopee.co.id/60MLu54FDm",
            wa: "https://wa.me/6285141632570?text=Asalamualaikum, saya mau tanya produk MILMODE SETELAN ANAK KINGSLEY"
        }
    },
    { 
        id: 8, 
        name: "littlevin Setelan Anak Fullprint",
        images: ["img/littlevinSetelanAnakFullprint1.jpg", "img/littlevinSetelanAnakFullprint2.jpg"],
        price: 40000,
        grosirPrice: 35000,
        minOrder: 12,
        description: "Bahan: Babyterry Premium & Dropneedle Rib Tebal \n motif : bordir",
        links: {
            tiktok: "https://vt.tokopedia.com/t/ZS9eDXA1TasVX-FLNlk/",
            shopee: "https://s.shopee.co.id/60MLu54FDm",
            wa: "https://wa.me/6285141632570?text=Asalamualaikum, saya mau tanya produk MILMODE SETELAN ANAK KINGSLEY"
        }
    },
    { 
        id: 9, 
        name: "milmode Setelan Anak Kingsley",
        images: ["img/milmodeSetelanAnakKingsley1.jpg", "img/milmodeSetelanAnakKingsley2"],
        price: 40000,
        grosirPrice: 35000,
        minOrder: 12,
        description: "Bahan: Babyterry Premium & Dropneedle Rib Tebal \n motif : bordir",
        links: {
            tiktok: "https://vt.tokopedia.com/t/ZS9eDXA1TasVX-FLNlk/",
            shopee: "https://s.shopee.co.id/60MLu54FDm",
            wa: "https://wa.me/6285141632570?text=Asalamualaikum, saya mau tanya produk MILMODE SETELAN ANAK KINGSLEY"
        }
    },
    { 
        id: 10, 
        name: "oneset Kaos Anak Unisex",
        images: ["img/onesetKaosAnakUnisex1.jpg", "img/onesetKaosAnakUnisex2.jpg"],
        price: 40000,
        grosirPrice: 35000,
        minOrder: 12,
        description: "Bahan: Babyterry Premium & Dropneedle Rib Tebal \n motif : bordir",
        links: {
            tiktok: "https://vt.tokopedia.com/t/ZS9eDXA1TasVX-FLNlk/",
            shopee: "https://s.shopee.co.id/60MLu54FDm",
            wa: "https://wa.me/6285141632570?text=Asalamualaikum, saya mau tanya produk MILMODE SETELAN ANAK KINGSLEY"
        }
    },
    { 
        id: 11, 
        name: "setelan Anak Bahan Jersey Neck",
        images: ["img/setelanAnakBahanJerseyNeck1.jpg", "img/setelanAnakBahanJerseyNeck2.jpg"],
        price: 40000,
        grosirPrice: 35000,
        minOrder: 12,
        description: "Bahan: Babyterry Premium & Dropneedle Rib Tebal \n motif : bordir",
        links: {
            tiktok: "https://vt.tokopedia.com/t/ZS9eDXA1TasVX-FLNlk/",
            shopee: "https://s.shopee.co.id/60MLu54FDm",
            wa: "https://wa.me/6285141632570?text=Asalamualaikum, saya mau tanya produk MILMODE SETELAN ANAK KINGSLEY"
        }
    },
    { 
        id: 12, 
        name: "setelan Anak Baju Unisex",
        images: ["img/setelanAnakBajuUnisex.jpg"],
        price: 40000,
        grosirPrice: 35000,
        minOrder: 12,
        description: "Bahan: Babyterry Premium & Dropneedle Rib Tebal \n motif : bordir",
        links: {
            tiktok: "https://vt.tokopedia.com/t/ZS9eDXA1TasVX-FLNlk/",
            shopee: "https://s.shopee.co.id/60MLu54FDm",
            wa: "https://wa.me/6285141632570?text=Asalamualaikum, saya mau tanya produk MILMODE SETELAN ANAK KINGSLEY"
        }
    },
    { 
        id: 13, 
        name: "setelan Anak Casual Laki",
        images: ["img/setelanAnakCasualLaki1.jpg","img/setelanAnakCasualLaki2.jpg"],
        price: 40000,
        grosirPrice: 35000,
        minOrder: 12,
        description: "Bahan: Babyterry Premium & Dropneedle Rib Tebal \n motif : bordir",
        links: {
            tiktok: "https://vt.tokopedia.com/t/ZS9eDXA1TasVX-FLNlk/",
            shopee: "https://s.shopee.co.id/60MLu54FDm",
            wa: "https://wa.me/6285141632570?text=Asalamualaikum, saya mau tanya produk MILMODE SETELAN ANAK KINGSLEY"
        }
    },
    { 
        id: 14, 
        name: "setelan Anak Motif F",
        images: ["img/setelanAnakMotifF.jpg"],
        price: 40000,
        grosirPrice: 35000,
        minOrder: 12,
        description: "Bahan: Babyterry Premium & Dropneedle Rib Tebal \n motif : bordir",
        links: {
            tiktok: "https://vt.tokopedia.com/t/ZS9eDXA1TasVX-FLNlk/",
            shopee: "https://s.shopee.co.id/60MLu54FDm",
            wa: "https://wa.me/6285141632570?text=Asalamualaikum, saya mau tanya produk MILMODE SETELAN ANAK KINGSLEY"
        }
    },
    { 
        id: 15, 
        name: "setelan Baju Salur Cargo",
        images: ["img/setelanBajuSalurCargo1.jpg"],
        price: 40000,
        grosirPrice: 35000,
        minOrder: 12,
        description: "Bahan: Babyterry Premium & Dropneedle Rib Tebal \n motif : bordir",
        links: {
            tiktok: "https://vt.tokopedia.com/t/ZS9eDXA1TasVX-FLNlk/",
            shopee: "https://s.shopee.co.id/60MLu54FDm",
            wa: "https://wa.me/6285141632570?text=Asalamualaikum, saya mau tanya produk MILMODE SETELAN ANAK KINGSLEY"
        }
    },
    { 
        id: 16, 
        name: "shafa Kids Dress Bayi",
        images: ["img/shafaKidsDressBayi1.jpg"],
        price: 40000,
        grosirPrice: 35000,
        minOrder: 12,
        description: "Bahan: Babyterry Premium & Dropneedle Rib Tebal \n motif : bordir",
        links: {
            tiktok: "https://vt.tokopedia.com/t/ZS9eDXA1TasVX-FLNlk/",
            shopee: "https://s.shopee.co.id/60MLu54FDm",
            wa: "https://wa.me/6285141632570?text=Asalamualaikum, saya mau tanya produk MILMODE SETELAN ANAK KINGSLEY"
        }
    }
];

// DATA SOSMED UNTUK FOOTER (Pastikan link ini benar)
const sosmedLinks = {
    instagram: "https://instagram.com/syaiful_kamaludin",
    youtube: "https://youtube.com/@syaiful_kamaludin",
    tiktok: "https://tiktok.com/@syaiful_kamaludin",
    pinterest: "https://pinterest.com/syaiful_kamaludin",
    facebook: "https://facebook.com/syaiful_kamaludin",
    whatsapp: "https://wa.me/6285141632570?text=Halo, saya mau tanya-tanya"
};