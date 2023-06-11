import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  provider1,
  provider2,
  provider3,
  provider4,
  provider5,
} from "../assets";
import { Autoplay } from "swiper";
import Fade from "react-reveal/Fade";

export default function Provider() {
  const providers = [
    provider1,
    provider2,
    provider3,
    provider4,
    provider5,
    provider1,
    provider2,
    provider3,
    provider4,
    provider5,
    provider1,
    provider2,
    provider3,
    provider4,
    provider5,
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  return (
    <Fade left>
      <div className="container__home__provider">
        <div className="container__home__provider__left">
          <svg
            width="221"
            height="117"
            viewBox="0 0 221 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.93 29.9923V41.1243H3.25429V9.38915H15.688C19.4585 9.38915 22.3313 10.3318 24.3063 12.217C26.2813 14.0724 27.2688 16.586 27.2688 19.758C27.2688 21.7331 26.82 23.4986 25.9222 25.0547C25.0544 26.5809 23.7527 27.7928 22.0171 28.6906C20.2814 29.5584 18.1717 29.9923 15.688 29.9923H10.93ZM14.8351 23.8428C17.9174 23.8428 19.4585 22.4812 19.4585 19.758C19.4585 16.9751 17.9174 15.5836 14.8351 15.5836H10.93V23.8428H14.8351ZM42.7612 15.7631C45.2449 15.7631 47.4593 16.2868 49.4045 17.3341C51.3795 18.3516 52.9206 19.8329 54.0278 21.778C55.165 23.7231 55.7335 25.9973 55.7335 28.6008C55.7335 31.2042 55.165 33.4785 54.0278 35.4236C52.9206 37.3687 51.3795 38.865 49.4045 39.9123C47.4593 40.9298 45.2449 41.4385 42.7612 41.4385C40.2774 41.4385 38.048 40.9298 36.073 39.9123C34.098 38.865 32.5419 37.3687 31.4048 35.4236C30.2975 33.4785 29.7439 31.2042 29.7439 28.6008C29.7439 25.9973 30.2975 23.7231 31.4048 21.778C32.5419 19.8329 34.098 18.3516 36.073 17.3341C38.048 16.2868 40.2774 15.7631 42.7612 15.7631ZM42.7612 22.4064C41.2949 22.4064 40.053 22.945 39.0356 24.0223C38.048 25.0697 37.5543 26.5958 37.5543 28.6008C37.5543 30.6057 38.048 32.1319 39.0356 33.1793C40.053 34.2266 41.2949 34.7503 42.7612 34.7503C44.2275 34.7503 45.4544 34.2266 46.4419 33.1793C47.4294 32.1319 47.9232 30.6057 47.9232 28.6008C47.9232 26.5958 47.4294 25.0697 46.4419 24.0223C45.4544 22.945 44.2275 22.4064 42.7612 22.4064ZM75.3344 15.7631C77.3992 15.7631 79.2396 16.2868 80.8555 17.3341C82.5014 18.3516 83.7881 19.8329 84.7158 21.778C85.6734 23.6931 86.1522 25.9674 86.1522 28.6008C86.1522 31.2042 85.6734 33.4785 84.7158 35.4236C83.7881 37.3687 82.5014 38.865 80.8555 39.9123C79.2396 40.9298 77.3992 41.4385 75.3344 41.4385C73.4192 41.4385 71.7734 41.0046 70.3968 40.1368C69.0203 39.2689 68.0178 38.0869 67.3894 36.5907V53.0642H59.7137V16.0773H67.3894V20.6109C68.0178 19.1147 69.0203 17.9326 70.3968 17.0648C71.7734 16.197 73.4192 15.7631 75.3344 15.7631ZM72.8656 22.4962C71.2497 22.4962 69.918 23.0498 68.8707 24.157C67.8532 25.2343 67.3445 26.7155 67.3445 28.6008C67.3445 30.4561 67.8532 31.9374 68.8707 33.0446C69.918 34.1518 71.2497 34.7054 72.8656 34.7054C74.5115 34.7054 75.8282 34.1668 76.8157 33.0895C77.8331 32.0122 78.3418 30.516 78.3418 28.6008C78.3418 26.6856 77.8331 25.1894 76.8157 24.1121C75.8282 23.0348 74.5115 22.4962 72.8656 22.4962ZM115.047 16.0773V41.1243H107.327V36.5907C106.609 38.057 105.531 39.2241 104.095 40.0919C102.689 40.9597 101.043 41.3936 99.1575 41.3936C96.2847 41.3936 93.9955 40.436 92.2898 38.5208C90.614 36.6056 89.7761 33.9723 89.7761 30.6207V16.0773H97.4069V29.6781C97.4069 31.3838 97.8408 32.7154 98.7086 33.673C99.6064 34.6007 100.803 35.0645 102.3 35.0645C103.856 35.0645 105.083 34.5708 105.98 33.5832C106.878 32.5957 107.327 31.1893 107.327 29.3639V16.0773H115.047ZM128.013 7.90788V41.1243H120.338V7.90788H128.013ZM142.829 15.7631C144.744 15.7631 146.39 16.197 147.766 17.0648C149.143 17.9326 150.16 19.1147 150.819 20.6109V16.0773H158.449V41.1243H150.819V36.5907C150.16 38.0869 149.143 39.2689 147.766 40.1368C146.39 41.0046 144.744 41.4385 142.829 41.4385C140.764 41.4385 138.909 40.9298 137.263 39.9123C135.647 38.865 134.36 37.3687 133.402 35.4236C132.475 33.4785 132.011 31.2042 132.011 28.6008C132.011 25.9674 132.475 23.6931 133.402 21.778C134.36 19.8329 135.647 18.3516 137.263 17.3341C138.909 16.2868 140.764 15.7631 142.829 15.7631ZM145.297 22.4962C143.652 22.4962 142.32 23.0348 141.303 24.1121C140.315 25.1894 139.821 26.6856 139.821 28.6008C139.821 30.516 140.315 32.0122 141.303 33.0895C142.32 34.1668 143.652 34.7054 145.297 34.7054C146.913 34.7054 148.23 34.1518 149.248 33.0446C150.295 31.9374 150.819 30.4561 150.819 28.6008C150.819 26.7155 150.295 25.2343 149.248 24.157C148.23 23.0498 146.913 22.4962 145.297 22.4962ZM171.41 20.7905C172.367 19.2643 173.594 18.0523 175.091 17.1546C176.617 16.2569 178.263 15.808 180.028 15.808V24.0223H177.829C175.794 24.0223 174.208 24.4562 173.071 25.324C171.963 26.1919 171.41 27.6582 171.41 29.723V41.1243H163.734V16.0773H171.41V20.7905ZM10.93 80.9923V92.1243H3.25429V60.3891H15.688C19.4585 60.3891 22.3313 61.3318 24.3063 63.217C26.2813 65.0724 27.2688 67.586 27.2688 70.758C27.2688 72.7331 26.82 74.4986 25.9222 76.0547C25.0544 77.5809 23.7527 78.7928 22.0171 79.6906C20.2814 80.5584 18.1717 80.9923 15.688 80.9923H10.93ZM14.8351 74.8428C17.9174 74.8428 19.4585 73.4812 19.4585 70.758C19.4585 67.9751 17.9174 66.5836 14.8351 66.5836H10.93V74.8428H14.8351ZM38.7213 71.7905C39.6789 70.2643 40.9058 69.0523 42.4021 68.1546C43.9282 67.2569 45.5741 66.808 47.3396 66.808V75.0223H45.1402C43.1053 75.0223 41.5193 75.4562 40.3822 76.324C39.2749 77.1919 38.7213 78.6582 38.7213 80.723V92.1243H31.0457V67.0773H38.7213V71.7905ZM62.2677 66.7631C64.7515 66.7631 66.9659 67.2868 68.911 68.3341C70.886 69.3516 72.4272 70.8329 73.5344 72.778C74.6715 74.7231 75.2401 76.9973 75.2401 79.6008C75.2401 82.2042 74.6715 84.4785 73.5344 86.4236C72.4272 88.3687 70.886 89.865 68.911 90.9123C66.9659 91.9298 64.7515 92.4385 62.2677 92.4385C59.784 92.4385 57.5546 91.9298 55.5796 90.9123C53.6045 89.865 52.0485 88.3687 50.9113 86.4236C49.8041 84.4785 49.2505 82.2042 49.2505 79.6008C49.2505 76.9973 49.8041 74.7231 50.9113 72.778C52.0485 70.8329 53.6045 69.3516 55.5796 68.3341C57.5546 67.2868 59.784 66.7631 62.2677 66.7631ZM62.2677 73.4064C60.8014 73.4064 59.5596 73.945 58.5421 75.0223C57.5546 76.0697 57.0608 77.5958 57.0608 79.6008C57.0608 81.6057 57.5546 83.1319 58.5421 84.1793C59.5596 85.2266 60.8014 85.7503 62.2677 85.7503C63.734 85.7503 64.961 85.2266 65.9485 84.1793C66.936 83.1319 67.4297 81.6057 67.4297 79.6008C67.4297 77.5958 66.936 76.0697 65.9485 75.0223C64.961 73.945 63.734 73.4064 62.2677 73.4064ZM90.8011 84.6281L96.2325 67.0773H104.402L95.5143 92.1243H85.9982L77.1106 67.0773H85.28L90.8011 84.6281ZM106.863 60.0301C106.863 58.863 107.282 57.9054 108.12 57.1573C108.958 56.3792 110.065 55.9902 111.442 55.9902C112.818 55.9902 113.926 56.3792 114.763 57.1573C115.601 57.9054 116.02 58.863 116.02 60.0301C116.02 61.1672 115.601 62.1248 114.763 62.9028C113.926 63.6509 112.818 64.025 111.442 64.025C110.065 64.025 108.958 63.6509 108.12 62.9028C107.282 62.1248 106.863 61.1672 106.863 60.0301ZM115.257 67.0773V92.1243H107.582V67.0773H115.257ZM130.073 66.7631C131.988 66.7631 133.634 67.197 135.01 68.0648C136.387 68.9326 137.389 70.1147 138.018 71.6109V58.9079H145.693V92.1243H138.018V87.5907C137.389 89.0869 136.387 90.2689 135.01 91.1368C133.634 92.0046 131.988 92.4385 130.073 92.4385C128.008 92.4385 126.153 91.9298 124.507 90.9123C122.891 89.865 121.604 88.3687 120.646 86.4236C119.719 84.4785 119.255 82.2042 119.255 79.6008C119.255 76.9674 119.719 74.6931 120.646 72.778C121.604 70.8329 122.891 69.3516 124.507 68.3341C126.153 67.2868 128.008 66.7631 130.073 66.7631ZM132.542 73.4962C130.896 73.4962 129.564 74.0348 128.547 75.1121C127.559 76.1894 127.065 77.6856 127.065 79.6008C127.065 81.516 127.559 83.0122 128.547 84.0895C129.564 85.1668 130.896 85.7054 132.542 85.7054C134.157 85.7054 135.474 85.1518 136.492 84.0446C137.539 82.9374 138.063 81.4561 138.063 79.6008C138.063 77.7155 137.539 76.2343 136.492 75.157C135.474 74.0498 134.157 73.4962 132.542 73.4962ZM174.768 78.9275C174.768 79.5559 174.693 80.2442 174.544 80.9923H157.173C157.262 82.8775 157.741 84.2391 158.609 85.077C159.477 85.885 160.584 86.289 161.931 86.289C163.068 86.289 164.01 86.0047 164.758 85.4361C165.507 84.8675 166 84.1344 166.24 83.2366H174.364C174.035 85.0022 173.317 86.5882 172.21 87.9947C171.102 89.3712 169.696 90.4634 167.99 91.2714C166.285 92.0495 164.384 92.4385 162.29 92.4385C159.836 92.4385 157.651 91.9298 155.736 90.9123C153.851 89.865 152.37 88.3687 151.292 86.4236C150.215 84.4785 149.676 82.2042 149.676 79.6008C149.676 76.9674 150.2 74.6931 151.247 72.778C152.325 70.8329 153.821 69.3516 155.736 68.3341C157.651 67.2868 159.836 66.7631 162.29 66.7631C164.773 66.7631 166.958 67.2718 168.843 68.2893C170.728 69.3067 172.18 70.7431 173.197 72.5984C174.245 74.4238 174.768 76.5335 174.768 78.9275ZM167.003 77.7604C167.033 76.1146 166.584 74.8877 165.656 74.0797C164.758 73.2418 163.636 72.8229 162.29 72.8229C160.883 72.8229 159.716 73.2418 158.788 74.0797C157.861 74.9176 157.337 76.1445 157.217 77.7604H167.003ZM186.445 71.7905C187.403 70.2643 188.63 69.0523 190.126 68.1546C191.652 67.2569 193.298 66.808 195.064 66.808V75.0223H192.864C190.829 75.0223 189.243 75.4562 188.106 76.324C186.999 77.1919 186.445 78.6582 186.445 80.723V92.1243H178.77V67.0773H186.445V71.7905ZM207.388 66.7631C210.56 66.7631 213.089 67.5561 214.974 69.1421C216.889 70.7281 218.086 72.8229 218.565 75.4263H211.383C211.174 74.4089 210.695 73.6159 209.947 73.0473C209.229 72.4488 208.316 72.1495 207.209 72.1495C206.341 72.1495 205.682 72.3441 205.234 72.7331C204.785 73.0922 204.56 73.6159 204.56 74.3041C204.56 75.0822 204.964 75.6657 205.772 76.0547C206.61 76.4437 207.912 76.8328 209.677 77.2218C211.593 77.6706 213.164 78.1345 214.391 78.6133C215.617 79.0621 216.68 79.8103 217.577 80.8576C218.475 81.905 218.924 83.3115 218.924 85.077C218.924 86.5134 218.535 87.7852 217.757 88.8924C216.979 89.9996 215.857 90.8674 214.391 91.4958C212.924 92.1243 211.189 92.4385 209.184 92.4385C205.802 92.4385 203.094 91.6904 201.059 90.1941C199.024 88.6979 197.782 86.5583 197.333 83.7753H204.74C204.86 84.8526 205.308 85.6755 206.086 86.2441C206.894 86.8126 207.927 87.0969 209.184 87.0969C210.051 87.0969 210.71 86.9024 211.159 86.5134C211.608 86.0944 211.832 85.5558 211.832 84.8975C211.832 84.0296 211.413 83.4162 210.575 83.0571C209.767 82.6681 208.436 82.2641 206.58 81.8451C204.725 81.4561 203.199 81.0372 202.002 80.5883C200.805 80.1394 199.772 79.4212 198.904 78.4337C198.037 77.4163 197.603 76.0398 197.603 74.3041C197.603 72.0598 198.456 70.2493 200.161 68.8728C201.867 67.4663 204.276 66.7631 207.388 66.7631Z"
              fill="white"
            />
            <path
              d="M4.43036 109.623C7.10799 109.311 9.65822 108.872 12.3045 108.525C20.3652 107.469 28.7651 106.81 37.1235 106.159C66.1091 103.899 95.4254 102.322 125.022 101.3C146.94 100.544 168.663 100.749 190.81 101.527C196.153 101.715 201.503 101.876 206.845 102.098C209.101 102.192 210.839 102.292 212.777 102.725"
              stroke="#3FC344"
              strokeWidth="6.58283"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="container__home__provider__right">
          <Swiper
            slidesPerView={
              isMobile
                ? 1
                : window.innerWidth < 1024
                ? 2
                : window.innerWidth < 1440
                ? 3
                : 4
            }
            spaceBetween={30}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {providers.map((provider, index) => (
              <SwiperSlide key={index}>
                <div className="container__home__provider__right__entry">
                  <img
                    src={provider}
                    alt={`provider${index}`}
                    className="container__home__provider__right__img"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Fade>
  );
}
