import { Dribbble, Facebook, Instagram } from "react-feather";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container__footer">
      <div className="container__footer__content">
        <div className="container__footer__content__left">
          <div className="container__footer__content__left__logo">
            <svg
              width="218"
              height="86"
              viewBox="0 0 118 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.63688 28L0.300998 7.61421H4.89806L8.92049 24.689H7.68914L11.9305 7.61421H16.3086L20.55 24.689H19.3186L23.341 7.61421H27.9381L22.6022 28H17.6768L13.4081 11.5819H14.831L10.5623 28H5.63688ZM36.1185 28.3284C34.5314 28.3284 33.1541 27.9818 31.9866 27.2885C30.8191 26.5771 29.9161 25.6285 29.2776 24.4427C28.6391 23.257 28.3199 21.9436 28.3199 20.5024C28.3199 19.0065 28.6483 17.6749 29.305 16.5073C29.98 15.3398 30.883 14.4186 32.014 13.7436C33.145 13.0687 34.422 12.7312 35.8449 12.7312C37.0306 12.7312 38.0795 12.9227 38.9917 13.3058C39.9038 13.6707 40.67 14.1906 41.2902 14.8655C41.9287 15.5405 42.4121 16.3249 42.7405 17.2188C43.0688 18.0944 43.233 19.0521 43.233 20.092C43.233 20.3838 43.2148 20.6757 43.1783 20.9676C43.16 21.2412 43.1144 21.4784 43.0415 21.679H31.8498V18.6691H40.7156L38.7728 20.092C38.9552 19.3075 38.9461 18.6143 38.7454 18.0123C38.5447 17.3921 38.189 16.9087 37.6782 16.5621C37.1857 16.1972 36.5746 16.0148 35.8449 16.0148C35.1334 16.0148 34.5223 16.1881 34.0115 16.5347C33.5007 16.8813 33.1176 17.3921 32.8622 18.0671C32.6069 18.742 32.5065 19.5629 32.5612 20.5298C32.4883 21.3689 32.5886 22.1077 32.8622 22.7462C33.1359 23.3847 33.5555 23.8864 34.121 24.2512C34.6865 24.5978 35.3706 24.7711 36.1732 24.7711C36.9029 24.7711 37.5232 24.6252 38.0339 24.3333C38.563 24.0414 38.9734 23.6401 39.2653 23.1293L42.5489 24.689C42.257 25.4187 41.7919 26.0572 41.1534 26.6045C40.5331 27.1517 39.7943 27.5804 38.9369 27.8905C38.0795 28.1824 37.1401 28.3284 36.1185 28.3284ZM52.8466 28.3284C51.2595 28.3284 49.8822 27.9818 48.7147 27.2885C47.5472 26.5771 46.6442 25.6285 46.0057 24.4427C45.3672 23.257 45.048 21.9436 45.048 20.5024C45.048 19.0065 45.3763 17.6749 46.0331 16.5073C46.708 15.3398 47.611 14.4186 48.742 13.7436C49.8731 13.0687 51.15 12.7312 52.5729 12.7312C53.7587 12.7312 54.8076 12.9227 55.7197 13.3058C56.6318 13.6707 57.398 14.1906 58.0183 14.8655C58.6567 15.5405 59.1402 16.3249 59.4685 17.2188C59.7969 18.0944 59.9611 19.0521 59.9611 20.092C59.9611 20.3838 59.9428 20.6757 59.9063 20.9676C59.8881 21.2412 59.8425 21.4784 59.7695 21.679H48.5779V18.6691H57.4436L55.5008 20.092C55.6832 19.3075 55.6741 18.6143 55.4735 18.0123C55.2728 17.3921 54.9171 16.9087 54.4063 16.5621C53.9137 16.1972 53.3026 16.0148 52.5729 16.0148C51.8615 16.0148 51.2504 16.1881 50.7396 16.5347C50.2288 16.8813 49.8457 17.3921 49.5903 18.0671C49.3349 18.742 49.2346 19.5629 49.2893 20.5298C49.2163 21.3689 49.3167 22.1077 49.5903 22.7462C49.8639 23.3847 50.2835 23.8864 50.849 24.2512C51.4145 24.5978 52.0986 24.7711 52.9013 24.7711C53.631 24.7711 54.2512 24.6252 54.762 24.3333C55.291 24.0414 55.7015 23.6401 55.9934 23.1293L59.277 24.689C58.9851 25.4187 58.5199 26.0572 57.8814 26.6045C57.2612 27.1517 56.5224 27.5804 55.665 27.8905C54.8076 28.1824 53.8681 28.3284 52.8466 28.3284ZM62.378 28V7.28585H66.4825V20.5571L64.9502 20.0646L71.5448 13.0595H76.607L71.1891 19.0795L76.5797 28H71.9279L67.4129 20.4203L69.7935 19.8183L65.2238 24.7985L66.4825 22.4179V28H62.378ZM78.4113 28V7.28585H82.5158V20.5571L80.9835 20.0646L87.5781 13.0595H92.6403L87.2223 19.0795L92.613 28H87.9612L83.4462 20.4203L85.8268 19.8183L81.2571 24.7985L82.5158 22.4179V28H78.4113ZM94.4446 28V7.28585H98.5491V28H94.4446ZM103.879 34.0747C103.441 34.0747 103.012 34.0382 102.592 33.9652C102.191 33.8923 101.835 33.7737 101.525 33.6095V30.2438C101.781 30.3168 102.082 30.3806 102.428 30.4353C102.775 30.4901 103.094 30.5174 103.386 30.5174C104.189 30.5174 104.763 30.3259 105.11 29.9428C105.457 29.5597 105.739 29.1219 105.958 28.6294L106.971 26.3035L106.916 29.7239L100.349 13.0595H104.754L109.105 24.9079H107.463L111.814 13.0595H116.22L109.816 29.3955C109.415 30.4353 108.923 31.3019 108.339 31.9951C107.755 32.6883 107.089 33.2082 106.341 33.5548C105.612 33.9014 104.791 34.0747 103.879 34.0747Z"
                fill="#3FC344"
              />
              <path
                d="M3.4374 41.6731V37.5819H2.1717V36.9107H5.43184V37.5819H4.18532V41.6731H3.4374ZM5.92551 41.6731V36.834H6.64786V38.8924L6.53279 38.8029C6.61803 38.5855 6.7544 38.4215 6.94191 38.3107C7.12942 38.1956 7.34677 38.1381 7.59394 38.1381C7.84964 38.1381 8.0755 38.1935 8.27154 38.3043C8.46758 38.4151 8.62099 38.5685 8.7318 38.7645C8.8426 38.9606 8.898 39.1843 8.898 39.4357V41.6731H8.18205V39.6339C8.18205 39.4592 8.14795 39.3122 8.07977 39.1928C8.01584 39.0692 7.92635 38.9755 7.81128 38.9116C7.69622 38.8434 7.56411 38.8093 7.41495 38.8093C7.27006 38.8093 7.13795 38.8434 7.01862 38.9116C6.90356 38.9755 6.81193 39.0692 6.74374 39.1928C6.67982 39.3164 6.64786 39.4634 6.64786 39.6339V41.6731H5.92551ZM11.2948 41.7498C10.9496 41.7498 10.6427 41.671 10.3743 41.5133C10.11 41.3513 9.90335 41.134 9.75419 40.8613C9.60503 40.5842 9.53045 40.2753 9.53045 39.9343C9.53045 39.5849 9.60503 39.2759 9.75419 39.0074C9.90761 38.739 10.1122 38.528 10.3679 38.3746C10.6236 38.2169 10.9134 38.1381 11.2372 38.1381C11.4972 38.1381 11.7295 38.1828 11.934 38.2723C12.1386 38.3618 12.3112 38.4854 12.4518 38.6431C12.5924 38.7965 12.699 38.9734 12.7714 39.1736C12.8481 39.3739 12.8865 39.587 12.8865 39.8129C12.8865 39.8683 12.8844 39.9258 12.8801 39.9855C12.8758 40.0452 12.8673 40.1006 12.8545 40.1517H10.0994V39.5764H12.4454L12.1002 39.8385C12.1428 39.6296 12.1279 39.4443 12.0555 39.2823C11.9873 39.1161 11.8807 38.9861 11.7358 38.8924C11.5952 38.7944 11.429 38.7454 11.2372 38.7454C11.0455 38.7454 10.875 38.7944 10.7258 38.8924C10.5767 38.9861 10.4616 39.1225 10.3806 39.3015C10.2997 39.4762 10.2677 39.6893 10.2848 39.9407C10.2635 40.1751 10.2954 40.3797 10.3806 40.5544C10.4701 40.7291 10.5937 40.8655 10.7514 40.9635C10.9134 41.0616 11.0966 41.1106 11.3012 41.1106C11.51 41.1106 11.6868 41.0637 11.8317 40.9699C11.9809 40.8762 12.0981 40.7547 12.1833 40.6056L12.7714 40.8932C12.7032 41.0552 12.5967 41.2022 12.4518 41.3343C12.3112 41.4621 12.1407 41.5644 11.9404 41.6411C11.7444 41.7136 11.5292 41.7498 11.2948 41.7498ZM14.7792 41.6731V36.9107H15.4824L17.2723 39.391H16.9207L18.6786 36.9107H19.3818V41.6731H18.6338V37.7993L18.9151 37.876L17.1188 40.3307H17.0421L15.2842 37.876L15.5335 37.7993V41.6731H14.7792ZM21.9197 41.7498C21.5745 41.7498 21.2677 41.671 20.9992 41.5133C20.735 41.3513 20.5283 41.134 20.3791 40.8613C20.23 40.5842 20.1554 40.2753 20.1554 39.9343C20.1554 39.5849 20.23 39.2759 20.3791 39.0074C20.5326 38.739 20.7371 38.528 20.9928 38.3746C21.2485 38.2169 21.5383 38.1381 21.8622 38.1381C22.1221 38.1381 22.3544 38.1828 22.559 38.2723C22.7635 38.3618 22.9361 38.4854 23.0767 38.6431C23.2174 38.7965 23.3239 38.9734 23.3964 39.1736C23.4731 39.3739 23.5114 39.587 23.5114 39.8129C23.5114 39.8683 23.5093 39.9258 23.505 39.9855C23.5008 40.0452 23.4923 40.1006 23.4795 40.1517H20.7243V39.5764H23.0704L22.7252 39.8385C22.7678 39.6296 22.7529 39.4443 22.6804 39.2823C22.6122 39.1161 22.5057 38.9861 22.3608 38.8924C22.2202 38.7944 22.054 38.7454 21.8622 38.7454C21.6704 38.7454 21.4999 38.7944 21.3508 38.8924C21.2016 38.9861 21.0866 39.1225 21.0056 39.3015C20.9246 39.4762 20.8927 39.6893 20.9097 39.9407C20.8884 40.1751 20.9204 40.3797 21.0056 40.5544C21.0951 40.7291 21.2187 40.8655 21.3764 40.9635C21.5383 41.0616 21.7215 41.1106 21.9261 41.1106C22.1349 41.1106 22.3118 41.0637 22.4567 40.9699C22.6058 40.8762 22.723 40.7547 22.8083 40.6056L23.3964 40.8932C23.3282 41.0552 23.2216 41.2022 23.0767 41.3343C22.9361 41.4621 22.7656 41.5644 22.5654 41.6411C22.3693 41.7136 22.1541 41.7498 21.9197 41.7498ZM25.2208 41.7498C24.9864 41.7498 24.7797 41.7093 24.6007 41.6283C24.426 41.5431 24.2896 41.4281 24.1916 41.2832C24.0936 41.134 24.0446 40.9593 24.0446 40.759C24.0446 40.5715 24.085 40.4031 24.166 40.254C24.2512 40.1048 24.3812 39.9791 24.556 39.8768C24.7307 39.7745 24.9502 39.7021 25.2144 39.6595L26.4162 39.4613V40.0302L25.355 40.2156C25.1632 40.2497 25.0226 40.3115 24.9331 40.401C24.8436 40.4862 24.7989 40.597 24.7989 40.7334C24.7989 40.8655 24.8479 40.9742 24.9459 41.0594C25.0482 41.1404 25.1782 41.1809 25.3358 41.1809C25.5319 41.1809 25.7023 41.1383 25.8472 41.053C25.9964 40.9678 26.1114 40.8549 26.1924 40.7142C26.2734 40.5693 26.3139 40.4095 26.3139 40.2348V39.3462C26.3139 39.1758 26.25 39.0373 26.1221 38.9307C25.9985 38.8199 25.8323 38.7645 25.6235 38.7645C25.4317 38.7645 25.2634 38.8157 25.1185 38.918C24.9779 39.016 24.8734 39.1438 24.8053 39.3015L24.2044 39.0011C24.2683 38.8306 24.3727 38.6814 24.5176 38.5536C24.6625 38.4215 24.8308 38.3192 25.0226 38.2467C25.2186 38.1743 25.4253 38.1381 25.6427 38.1381C25.9154 38.1381 26.1562 38.1892 26.365 38.2915C26.5781 38.3938 26.7422 38.5365 26.8572 38.7198C26.9766 38.8988 27.0362 39.1076 27.0362 39.3462V41.6731H26.3458V41.0466L26.4929 41.0658C26.4119 41.2064 26.3075 41.3279 26.1796 41.4302C26.056 41.5325 25.9133 41.6113 25.7513 41.6667C25.5937 41.7221 25.4168 41.7498 25.2208 41.7498ZM27.8808 41.6731V36.834H28.6032V41.6731H27.8808ZM30.6355 41.6731V36.9107H31.3898V39.4933L31.1916 39.4166L33.3459 36.9107H34.2856L32.3806 39.1417L32.419 38.6047L34.3623 41.6731H33.4737L32.0802 39.4933L31.3898 40.2987V41.6731H30.6355ZM34.8538 41.6731V38.2148H35.5762V41.6731H34.8538ZM34.8538 37.7417V36.9107H35.5762V37.7417H34.8538ZM37.9166 41.7115C37.5543 41.7115 37.2731 41.6092 37.0728 41.4046C36.8725 41.2001 36.7723 40.9124 36.7723 40.5416V38.8668H36.165V38.2148H36.2609C36.4229 38.2148 36.5486 38.1679 36.6381 38.0741C36.7276 37.9804 36.7723 37.8525 36.7723 37.6906V37.4221H37.4947V38.2148H38.2809V38.8668H37.4947V40.5097C37.4947 40.629 37.5138 40.7313 37.5522 40.8165C37.5906 40.8975 37.6523 40.9614 37.7376 41.0083C37.8228 41.0509 37.9336 41.0722 38.07 41.0722C38.1041 41.0722 38.1424 41.0701 38.185 41.0658C38.2277 41.0616 38.2682 41.0573 38.3065 41.053V41.6731C38.2468 41.6816 38.1808 41.6901 38.1083 41.6987C38.0359 41.7072 37.972 41.7115 37.9166 41.7115ZM41.5799 41.7498C41.2987 41.7498 41.0515 41.6987 40.8384 41.5964C40.6253 41.4898 40.457 41.3428 40.3334 41.1553C40.2141 40.9635 40.1544 40.7419 40.1544 40.4905C40.1544 40.2774 40.1928 40.092 40.2695 39.9343C40.3462 39.7724 40.4421 39.636 40.5571 39.5252C40.6722 39.4102 40.7873 39.3143 40.9023 39.2376C41.0174 39.1609 41.1133 39.1012 41.19 39.0586L41.5799 38.8412C41.7078 38.7688 41.8292 38.6921 41.9443 38.6111C42.0594 38.5301 42.1531 38.4385 42.2256 38.3362C42.298 38.234 42.3342 38.1189 42.3342 37.991C42.3342 37.8376 42.2831 37.7098 42.1808 37.6075C42.0785 37.501 41.9507 37.4477 41.7973 37.4477C41.6439 37.4477 41.516 37.4988 41.4137 37.6011C41.3115 37.7034 41.2603 37.8355 41.2603 37.9974C41.2603 38.1082 41.2859 38.2169 41.337 38.3235C41.3924 38.43 41.4564 38.5301 41.5288 38.6239C41.6055 38.7134 41.6801 38.7986 41.7525 38.8796L44.3095 41.6731H43.4082L41.2156 39.3143C41.1133 39.2035 41.011 39.0863 40.9087 38.9627C40.8107 38.8348 40.7276 38.6942 40.6594 38.5408C40.5955 38.3874 40.5635 38.2169 40.5635 38.0294C40.5635 37.7865 40.6189 37.5755 40.7297 37.3965C40.8448 37.2176 40.994 37.0791 41.1772 36.981C41.3647 36.883 41.5693 36.834 41.7909 36.834C42.0168 36.834 42.2213 36.8852 42.4046 36.9874C42.5878 37.0854 42.7327 37.2218 42.8393 37.3965C42.9501 37.5713 43.0055 37.7694 43.0055 37.991C43.0055 38.2212 42.9522 38.4193 42.8456 38.5855C42.7391 38.7517 42.6091 38.8924 42.4557 39.0074C42.3065 39.1225 42.1659 39.2205 42.0338 39.3015L41.6439 39.5316C41.5416 39.5913 41.4329 39.6659 41.3178 39.7554C41.207 39.8406 41.1133 39.9429 41.0366 40.0622C40.9599 40.1773 40.9215 40.3158 40.9215 40.4777C40.9215 40.678 40.9833 40.8336 41.1069 40.9444C41.2347 41.0552 41.4009 41.1106 41.6055 41.1106C41.7376 41.1106 41.8548 41.0893 41.9571 41.0466C42.0594 41.004 42.1489 40.9486 42.2256 40.8804C42.3065 40.8122 42.3769 40.7377 42.4365 40.6567C42.5005 40.5715 42.558 40.4926 42.6091 40.4202L43.3506 39.3335H44.1241L43.2675 40.6631C43.1994 40.7654 43.1184 40.8804 43.0246 41.0083C42.9309 41.1319 42.8179 41.2512 42.6858 41.3663C42.5537 41.4771 42.396 41.5687 42.2128 41.6411C42.0338 41.7136 41.8229 41.7498 41.5799 41.7498ZM46.267 41.6731V36.9107H46.9702L48.7601 39.391H48.4085L50.1664 36.9107H50.8696V41.6731H50.1216V37.7993L50.4029 37.876L48.6066 40.3307H48.5299L46.772 37.876L47.0213 37.7993V41.6731H46.267ZM53.4075 41.7498C53.0623 41.7498 52.7555 41.671 52.487 41.5133C52.2228 41.3513 52.0161 41.134 51.8669 40.8613C51.7178 40.5842 51.6432 40.2753 51.6432 39.9343C51.6432 39.5849 51.7178 39.2759 51.8669 39.0074C52.0204 38.739 52.2249 38.528 52.4806 38.3746C52.7363 38.2169 53.0261 38.1381 53.35 38.1381C53.6099 38.1381 53.8422 38.1828 54.0468 38.2723C54.2513 38.3618 54.4239 38.4854 54.5645 38.6431C54.7052 38.7965 54.8117 38.9734 54.8842 39.1736C54.9609 39.3739 54.9992 39.587 54.9992 39.8129C54.9992 39.8683 54.9971 39.9258 54.9928 39.9855C54.9886 40.0452 54.9801 40.1006 54.9673 40.1517H52.2121V39.5764H54.5582L54.213 39.8385C54.2556 39.6296 54.2407 39.4443 54.1682 39.2823C54.1 39.1161 53.9935 38.9861 53.8486 38.8924C53.708 38.7944 53.5418 38.7454 53.35 38.7454C53.1582 38.7454 52.9877 38.7944 52.8386 38.8924C52.6894 38.9861 52.5744 39.1225 52.4934 39.3015C52.4124 39.4762 52.3805 39.6893 52.3975 39.9407C52.3762 40.1751 52.4082 40.3797 52.4934 40.5544C52.5829 40.7291 52.7065 40.8655 52.8642 40.9635C53.0261 41.0616 53.2093 41.1106 53.4139 41.1106C53.6227 41.1106 53.7996 41.0637 53.9445 40.9699C54.0936 40.8762 54.2108 40.7547 54.2961 40.6056L54.8842 40.8932C54.816 41.0552 54.7094 41.2022 54.5645 41.3343C54.4239 41.4621 54.2534 41.5644 54.0532 41.6411C53.8571 41.7136 53.6419 41.7498 53.4075 41.7498ZM56.7086 41.7498C56.4742 41.7498 56.2675 41.7093 56.0885 41.6283C55.9138 41.5431 55.7774 41.4281 55.6794 41.2832C55.5814 41.134 55.5324 40.9593 55.5324 40.759C55.5324 40.5715 55.5728 40.4031 55.6538 40.254C55.739 40.1048 55.869 39.9791 56.0438 39.8768C56.2185 39.7745 56.438 39.7021 56.7022 39.6595L57.904 39.4613V40.0302L56.8428 40.2156C56.651 40.2497 56.5104 40.3115 56.4209 40.401C56.3314 40.4862 56.2867 40.597 56.2867 40.7334C56.2867 40.8655 56.3357 40.9742 56.4337 41.0594C56.536 41.1404 56.6659 41.1809 56.8236 41.1809C57.0197 41.1809 57.1901 41.1383 57.335 41.053C57.4842 40.9678 57.5992 40.8549 57.6802 40.7142C57.7612 40.5693 57.8017 40.4095 57.8017 40.2348V39.3462C57.8017 39.1758 57.7377 39.0373 57.6099 38.9307C57.4863 38.8199 57.3201 38.7645 57.1113 38.7645C56.9195 38.7645 56.7512 38.8157 56.6063 38.918C56.4657 39.016 56.3612 39.1438 56.2931 39.3015L55.6922 39.0011C55.7561 38.8306 55.8605 38.6814 56.0054 38.5536C56.1503 38.4215 56.3186 38.3192 56.5104 38.2467C56.7064 38.1743 56.9131 38.1381 57.1305 38.1381C57.4032 38.1381 57.644 38.1892 57.8528 38.2915C58.0659 38.3938 58.23 38.5365 58.345 38.7198C58.4644 38.8988 58.524 39.1076 58.524 39.3462V41.6731H57.8336V41.0466L57.9807 41.0658C57.8997 41.2064 57.7953 41.3279 57.6674 41.4302C57.5438 41.5325 57.4011 41.6113 57.2391 41.6667C57.0815 41.7221 56.9046 41.7498 56.7086 41.7498ZM59.3686 41.6731V36.834H60.091V41.6731H59.3686ZM62.1233 41.6731V36.9107H63.8556C64.1752 36.9107 64.4565 36.9704 64.6994 37.0897C64.9466 37.2048 65.1384 37.3752 65.2747 37.6011C65.4111 37.8227 65.4793 38.0891 65.4793 38.4002C65.4793 38.707 65.409 38.9712 65.2684 39.1928C65.132 39.4144 64.9423 39.5849 64.6994 39.7042C64.4565 39.8235 64.1752 39.8832 63.8556 39.8832H62.8776V41.6731H62.1233ZM62.8776 39.212H63.8748C64.0453 39.212 64.1944 39.1779 64.3223 39.1097C64.4501 39.0415 64.5503 38.9478 64.6227 38.8285C64.6952 38.7049 64.7314 38.56 64.7314 38.3938C64.7314 38.2276 64.6952 38.0848 64.6227 37.9655C64.5503 37.8419 64.4501 37.7481 64.3223 37.6842C64.1944 37.616 64.0453 37.5819 63.8748 37.5819H62.8776V39.212ZM66.1856 41.6731V38.2148H66.876V38.9116L66.812 38.8093C66.8887 38.5834 67.0123 38.4215 67.1828 38.3235C67.3533 38.2212 67.5578 38.17 67.7965 38.17H68.0074V38.8285H67.707C67.4683 38.8285 67.2744 38.903 67.1253 39.0522C66.9804 39.1971 66.9079 39.4059 66.9079 39.6787V41.6731H66.1856ZM70.1253 41.7498C69.7801 41.7498 69.4732 41.671 69.2048 41.5133C68.9405 41.3513 68.7338 41.134 68.5847 40.8613C68.4355 40.5842 68.3609 40.2753 68.3609 39.9343C68.3609 39.5849 68.4355 39.2759 68.5847 39.0074C68.7381 38.739 68.9427 38.528 69.1984 38.3746C69.4541 38.2169 69.7438 38.1381 70.0677 38.1381C70.3277 38.1381 70.56 38.1828 70.7645 38.2723C70.9691 38.3618 71.1417 38.4854 71.2823 38.6431C71.4229 38.7965 71.5295 38.9734 71.6019 39.1736C71.6786 39.3739 71.717 39.587 71.717 39.8129C71.717 39.8683 71.7149 39.9258 71.7106 39.9855C71.7063 40.0452 71.6978 40.1006 71.685 40.1517H68.9299V39.5764H71.2759L70.9307 39.8385C70.9733 39.6296 70.9584 39.4443 70.886 39.2823C70.8178 39.1161 70.7112 38.9861 70.5663 38.8924C70.4257 38.7944 70.2595 38.7454 70.0677 38.7454C69.876 38.7454 69.7055 38.7944 69.5563 38.8924C69.4072 38.9861 69.2921 39.1225 69.2111 39.3015C69.1302 39.4762 69.0982 39.6893 69.1153 39.9407C69.0939 40.1751 69.1259 40.3797 69.2111 40.5544C69.3006 40.7291 69.4242 40.8655 69.5819 40.9635C69.7438 41.0616 69.9271 41.1106 70.1317 41.1106C70.3405 41.1106 70.5173 41.0637 70.6622 40.9699C70.8114 40.8762 70.9286 40.7547 71.0138 40.6056L71.6019 40.8932C71.5337 41.0552 71.4272 41.2022 71.2823 41.3343C71.1417 41.4621 70.9712 41.5644 70.7709 41.6411C70.5749 41.7136 70.3597 41.7498 70.1253 41.7498ZM72.422 42.9516V38.2148H73.1123V38.9307L73.0292 38.7645C73.1571 38.5685 73.3276 38.4151 73.5406 38.3043C73.7537 38.1935 73.9966 38.1381 74.2694 38.1381C74.5975 38.1381 74.8916 38.2169 75.1515 38.3746C75.4158 38.5323 75.6224 38.7475 75.7716 39.0202C75.925 39.293 76.0017 39.5998 76.0017 39.9407C76.0017 40.2817 75.925 40.5885 75.7716 40.8613C75.6224 41.134 75.4179 41.3513 75.1579 41.5133C74.898 41.671 74.6018 41.7498 74.2694 41.7498C74.0009 41.7498 73.7558 41.6944 73.5342 41.5836C73.3169 41.4728 73.1486 41.313 73.0292 41.1042L73.1443 40.9699V42.9516H72.422ZM74.1991 41.0786C74.4036 41.0786 74.5847 41.0296 74.7424 40.9316C74.9001 40.8336 75.0237 40.6993 75.1132 40.5288C75.2069 40.3541 75.2538 40.1581 75.2538 39.9407C75.2538 39.7234 75.2069 39.5295 75.1132 39.359C75.0237 39.1886 74.9001 39.0543 74.7424 38.9563C74.5847 38.8583 74.4036 38.8093 74.1991 38.8093C73.9988 38.8093 73.8176 38.8583 73.6557 38.9563C73.498 39.0543 73.3723 39.1886 73.2785 39.359C73.189 39.5295 73.1443 39.7234 73.1443 39.9407C73.1443 40.1581 73.189 40.3541 73.2785 40.5288C73.3723 40.6993 73.498 40.8336 73.6557 40.9316C73.8176 41.0296 73.9988 41.0786 74.1991 41.0786ZM77.8921 41.6731V36.9107H78.5953L80.3852 39.391H80.0336L81.7915 36.9107H82.4947V41.6731H81.7468V37.7993L82.0281 37.876L80.2318 40.3307H80.1551L78.3971 37.876L78.6464 37.7993V41.6731H77.8921ZM84.4445 41.7498C84.2102 41.7498 84.0035 41.7093 83.8245 41.6283C83.6498 41.5431 83.5134 41.4281 83.4154 41.2832C83.3173 41.134 83.2683 40.9593 83.2683 40.759C83.2683 40.5715 83.3088 40.4031 83.3898 40.254C83.475 40.1048 83.605 39.9791 83.7797 39.8768C83.9545 39.7745 84.1739 39.7021 84.4382 39.6595L85.6399 39.4613V40.0302L84.5788 40.2156C84.387 40.2497 84.2464 40.3115 84.1569 40.401C84.0674 40.4862 84.0226 40.597 84.0226 40.7334C84.0226 40.8655 84.0717 40.9742 84.1697 41.0594C84.272 41.1404 84.4019 41.1809 84.5596 41.1809C84.7556 41.1809 84.9261 41.1383 85.071 41.053C85.2202 40.9678 85.3352 40.8549 85.4162 40.7142C85.4972 40.5693 85.5377 40.4095 85.5377 40.2348V39.3462C85.5377 39.1758 85.4737 39.0373 85.3459 38.9307C85.2223 38.8199 85.0561 38.7645 84.8473 38.7645C84.6555 38.7645 84.4872 38.8157 84.3423 38.918C84.2016 39.016 84.0972 39.1438 84.029 39.3015L83.4281 39.0011C83.4921 38.8306 83.5965 38.6814 83.7414 38.5536C83.8863 38.4215 84.0546 38.3192 84.2464 38.2467C84.4424 38.1743 84.6491 38.1381 84.8664 38.1381C85.1392 38.1381 85.38 38.1892 85.5888 38.2915C85.8019 38.3938 85.9659 38.5365 86.081 38.7198C86.2003 38.8988 86.26 39.1076 86.26 39.3462V41.6731H85.5696V41.0466L85.7166 41.0658C85.6357 41.2064 85.5313 41.3279 85.4034 41.4302C85.2798 41.5325 85.1371 41.6113 84.9751 41.6667C84.8174 41.7221 84.6406 41.7498 84.4445 41.7498ZM87.1046 41.6731V38.2148H87.795V38.9116L87.7311 38.8093C87.8078 38.5834 87.9314 38.4215 88.1018 38.3235C88.2723 38.2212 88.4768 38.17 88.7155 38.17H88.9265V38.8285H88.626C88.3874 38.8285 88.1934 38.903 88.0443 39.0522C87.8994 39.1971 87.8269 39.4059 87.8269 39.6787V41.6731H87.1046ZM89.4206 41.6731V36.834H90.143V40.075L89.8617 40.0047L91.5941 38.2148H92.4954L91.1913 39.6019L92.5529 41.6731H91.7219L90.5073 39.8385L90.9356 39.7809L89.9128 40.8676L90.143 40.3882V41.6731H89.4206ZM94.6088 41.7498C94.2636 41.7498 93.9568 41.671 93.6883 41.5133C93.4241 41.3513 93.2174 41.134 93.0683 40.8613C92.9191 40.5842 92.8445 40.2753 92.8445 39.9343C92.8445 39.5849 92.9191 39.2759 93.0683 39.0074C93.2217 38.739 93.4262 38.528 93.6819 38.3746C93.9376 38.2169 94.2274 38.1381 94.5513 38.1381C94.8113 38.1381 95.0435 38.1828 95.2481 38.2723C95.4526 38.3618 95.6252 38.4854 95.7659 38.6431C95.9065 38.7965 96.013 38.9734 96.0855 39.1736C96.1622 39.3739 96.2006 39.587 96.2006 39.8129C96.2006 39.8683 96.1984 39.9258 96.1942 39.9855C96.1899 40.0452 96.1814 40.1006 96.1686 40.1517H93.4135V39.5764H95.7595L95.4143 39.8385C95.4569 39.6296 95.442 39.4443 95.3695 39.2823C95.3014 39.1161 95.1948 38.9861 95.0499 38.8924C94.9093 38.7944 94.7431 38.7454 94.5513 38.7454C94.3595 38.7454 94.1891 38.7944 94.0399 38.8924C93.8908 38.9861 93.7757 39.1225 93.6947 39.3015C93.6137 39.4762 93.5818 39.6893 93.5988 39.9407C93.5775 40.1751 93.6095 40.3797 93.6947 40.5544C93.7842 40.7291 93.9078 40.8655 94.0655 40.9635C94.2274 41.0616 94.4107 41.1106 94.6152 41.1106C94.8241 41.1106 95.0009 41.0637 95.1458 40.9699C95.295 40.8762 95.4122 40.7547 95.4974 40.6056L96.0855 40.8932C96.0173 41.0552 95.9108 41.2022 95.7659 41.3343C95.6252 41.4621 95.4548 41.5644 95.2545 41.6411C95.0584 41.7136 94.8432 41.7498 94.6088 41.7498ZM98.4014 41.7115C98.0391 41.7115 97.7579 41.6092 97.5576 41.4046C97.3573 41.2001 97.2571 40.9124 97.2571 40.5416V38.8668H96.6498V38.2148H96.7457C96.9077 38.2148 97.0334 38.1679 97.1229 38.0741C97.2124 37.9804 97.2571 37.8525 97.2571 37.6906V37.4221H97.9795V38.2148H98.7657V38.8668H97.9795V40.5097C97.9795 40.629 97.9986 40.7313 98.037 40.8165C98.0753 40.8975 98.1371 40.9614 98.2224 41.0083C98.3076 41.0509 98.4184 41.0722 98.5548 41.0722C98.5889 41.0722 98.6272 41.0701 98.6698 41.0658C98.7125 41.0616 98.7529 41.0573 98.7913 41.053V41.6731C98.7316 41.6816 98.6656 41.6901 98.5931 41.6987C98.5207 41.7072 98.4568 41.7115 98.4014 41.7115ZM99.4962 42.9516V38.2148H100.187V38.9307L100.104 38.7645C100.231 38.5685 100.402 38.4151 100.615 38.3043C100.828 38.1935 101.071 38.1381 101.344 38.1381C101.672 38.1381 101.966 38.2169 102.226 38.3746C102.49 38.5323 102.697 38.7475 102.846 39.0202C102.999 39.293 103.076 39.5998 103.076 39.9407C103.076 40.2817 102.999 40.5885 102.846 40.8613C102.697 41.134 102.492 41.3513 102.232 41.5133C101.972 41.671 101.676 41.7498 101.344 41.7498C101.075 41.7498 100.83 41.6944 100.609 41.5836C100.391 41.4728 100.223 41.313 100.104 41.1042L100.219 40.9699V42.9516H99.4962ZM101.273 41.0786C101.478 41.0786 101.659 41.0296 101.817 40.9316C101.974 40.8336 102.098 40.6993 102.187 40.5288C102.281 40.3541 102.328 40.1581 102.328 39.9407C102.328 39.7234 102.281 39.5295 102.187 39.359C102.098 39.1886 101.974 39.0543 101.817 38.9563C101.659 38.8583 101.478 38.8093 101.273 38.8093C101.073 38.8093 100.892 38.8583 100.73 38.9563C100.572 39.0543 100.447 39.1886 100.353 39.359C100.263 39.5295 100.219 39.7234 100.219 39.9407C100.219 40.1581 100.263 40.3541 100.353 40.5288C100.447 40.6993 100.572 40.8336 100.73 40.9316C100.892 41.0296 101.073 41.0786 101.273 41.0786ZM103.779 41.6731V36.834H104.501V41.6731H103.779ZM106.381 41.7498C106.147 41.7498 105.94 41.7093 105.761 41.6283C105.586 41.5431 105.45 41.4281 105.352 41.2832C105.254 41.134 105.205 40.9593 105.205 40.759C105.205 40.5715 105.245 40.4031 105.326 40.254C105.412 40.1048 105.542 39.9791 105.716 39.8768C105.891 39.7745 106.111 39.7021 106.375 39.6595L107.577 39.4613V40.0302L106.515 40.2156C106.324 40.2497 106.183 40.3115 106.093 40.401C106.004 40.4862 105.959 40.597 105.959 40.7334C105.959 40.8655 106.008 40.9742 106.106 41.0594C106.209 41.1404 106.339 41.1809 106.496 41.1809C106.692 41.1809 106.863 41.1383 107.008 41.053C107.157 40.9678 107.272 40.8549 107.353 40.7142C107.434 40.5693 107.474 40.4095 107.474 40.2348V39.3462C107.474 39.1758 107.41 39.0373 107.282 38.9307C107.159 38.8199 106.993 38.7645 106.784 38.7645C106.592 38.7645 106.424 38.8157 106.279 38.918C106.138 39.016 106.034 39.1438 105.966 39.3015L105.365 39.0011C105.429 38.8306 105.533 38.6814 105.678 38.5536C105.823 38.4215 105.991 38.3192 106.183 38.2467C106.379 38.1743 106.586 38.1381 106.803 38.1381C107.076 38.1381 107.317 38.1892 107.525 38.2915C107.738 38.3938 107.903 38.5365 108.018 38.7198C108.137 38.8988 108.197 39.1076 108.197 39.3462V41.6731H107.506V41.0466L107.653 41.0658C107.572 41.2064 107.468 41.3279 107.34 41.4302C107.216 41.5325 107.074 41.6113 106.912 41.6667C106.754 41.7221 106.577 41.7498 106.381 41.7498ZM110.684 41.7498C110.339 41.7498 110.032 41.671 109.764 41.5133C109.499 41.3513 109.288 41.134 109.131 40.8613C108.977 40.5885 108.901 40.2795 108.901 39.9343C108.901 39.5934 108.977 39.2866 109.131 39.0138C109.284 38.7411 109.495 38.528 109.764 38.3746C110.032 38.2169 110.339 38.1381 110.684 38.1381C110.918 38.1381 111.138 38.1807 111.342 38.2659C111.547 38.3469 111.724 38.4598 111.873 38.6047C112.026 38.7496 112.139 38.918 112.212 39.1097L111.579 39.4038C111.507 39.2248 111.389 39.082 111.227 38.9755C111.07 38.8647 110.889 38.8093 110.684 38.8093C110.488 38.8093 110.311 38.8583 110.153 38.9563C110 39.0501 109.879 39.1843 109.789 39.359C109.7 39.5295 109.655 39.7234 109.655 39.9407C109.655 40.1581 109.7 40.3541 109.789 40.5288C109.879 40.6993 110 40.8336 110.153 40.9316C110.311 41.0296 110.488 41.0786 110.684 41.0786C110.893 41.0786 111.074 41.0253 111.227 40.9188C111.385 40.808 111.502 40.661 111.579 40.4777L112.212 40.7782C112.144 40.9614 112.033 41.1276 111.879 41.2768C111.73 41.4217 111.553 41.5367 111.349 41.622C111.144 41.7072 110.923 41.7498 110.684 41.7498ZM114.542 41.7498C114.196 41.7498 113.89 41.671 113.621 41.5133C113.357 41.3513 113.15 41.134 113.001 40.8613C112.852 40.5842 112.777 40.2753 112.777 39.9343C112.777 39.5849 112.852 39.2759 113.001 39.0074C113.154 38.739 113.359 38.528 113.615 38.3746C113.87 38.2169 114.16 38.1381 114.484 38.1381C114.744 38.1381 114.976 38.1828 115.181 38.2723C115.385 38.3618 115.558 38.4854 115.699 38.6431C115.839 38.7965 115.946 38.9734 116.018 39.1736C116.095 39.3739 116.133 39.587 116.133 39.8129C116.133 39.8683 116.131 39.9258 116.127 39.9855C116.123 40.0452 116.114 40.1006 116.101 40.1517H113.346V39.5764H115.692L115.347 39.8385C115.39 39.6296 115.375 39.4443 115.302 39.2823C115.234 39.1161 115.128 38.9861 114.983 38.8924C114.842 38.7944 114.676 38.7454 114.484 38.7454C114.292 38.7454 114.122 38.7944 113.973 38.8924C113.823 38.9861 113.708 39.1225 113.627 39.3015C113.546 39.4762 113.514 39.6893 113.532 39.9407C113.51 40.1751 113.542 40.3797 113.627 40.5544C113.717 40.7291 113.841 40.8655 113.998 40.9635C114.16 41.0616 114.343 41.1106 114.548 41.1106C114.757 41.1106 114.934 41.0637 115.079 40.9699C115.228 40.8762 115.345 40.7547 115.43 40.6056L116.018 40.8932C115.95 41.0552 115.843 41.2022 115.699 41.3343C115.558 41.4621 115.387 41.5644 115.187 41.6411C114.991 41.7136 114.776 41.7498 114.542 41.7498Z"
                fill="#3FC344"
              />
            </svg>
          </div>
          <div className="container__footer__content__left__logo__info">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </div>
        </div>
        <div className="container__footer__content__mid">
          <div className="container__footer__content__mid__content">
            <div className="container__footer__content__mid__content__left">
              <div className="container__footer__content__mid__content__left__heading">
                About Us
              </div>
              <div className="container__footer__content__mid__content__left__links">
                <NavLink to="#">Careers</NavLink>
                <NavLink to="#">Press & News</NavLink>
                <NavLink to="#">Partnerships</NavLink>

                <NavLink to="#">Teams & Conditions</NavLink>
              </div>
            </div>
            <div className="container__footer__content__mid__content__left">
              <div className="container__footer__content__mid__content__left__heading">
                Quick Links
              </div>
              <div className="container__footer__content__mid__content__left__links">
                <NavLink to="#">Home</NavLink>
                <NavLink to="#">About us </NavLink>
                <NavLink to="#">Categories</NavLink>
                <NavLink to="#">Contact Us</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="container__footer__content__right">
          <div className="container__footer__content__mid__content__left__heading">
            Join a Newsletter
          </div>
          <div className="container__footer__content__right__input__name">
            Your Email
          </div>
          <div className="container__footer__content__right__input__button">
            <input type="email" name="email" id="email" />
            <button>Submit</button>
          </div>
          <div className="container__footer__content__right__all__links">
            <Dribbble
              color="#fff"
              className="container__footer__content__right__all__links__link"
            />
            <Facebook
              color="#fff"
              className="container__footer__content__right__all__links__link"
            />
            <Instagram
              color="#fff"
              className="container__footer__content__right__all__links__link"
            />
          </div>
        </div>
      </div>
      <div className="container__footer__bottom">
        <span className="line"> </span>
        <div className="container__footer__bottom__heading">
          Copyrignt 2023. All right reserved.
        </div>
      </div>
    </div>
  );
}