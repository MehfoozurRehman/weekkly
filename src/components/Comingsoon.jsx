import { comingsoon } from "@assets";
import ComingSoonForm from "./ComingSoonForm";

export default function Comingsoon() {
  return (
    <div className="comingsoon__section">
      <svg
        width="409"
        height="82"
        viewBox="0 0 409 82"
        fill="none"
        className="comingsoon__section__svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M257 72.3929C258.925 72.0018 260.766 71.453 262.671 71.0192C268.473 69.6976 274.495 68.8763 280.488 68.0635C301.267 65.2449 322.246 63.2851 343.394 62.0235C359.055 61.0893 374.526 61.3621 390.267 62.3564C394.065 62.5962 397.869 62.8028 401.663 63.0862C403.266 63.2058 404.499 63.3328 405.857 63.8785"
          stroke="#3FC344"
          strokeWidth="6.20354"
          strokeLinecap="round"
        />
        <path
          d="M18.7989 18.8629C23.2279 18.8629 26.886 20.0275 29.7731 22.3569C32.693 24.6862 34.5794 27.8358 35.4324 31.8055H26.5251C25.8689 30.198 24.8519 28.9349 23.474 28.0162C22.1289 27.0976 20.5213 26.6383 18.6512 26.6383C16.1906 26.6383 14.2058 27.5405 12.6966 29.3449C11.1875 31.1494 10.4329 33.5607 10.4329 36.5791C10.4329 39.5974 11.1875 42.0088 12.6966 43.8132C14.2058 45.5848 16.1906 46.4706 18.6512 46.4706C20.5213 46.4706 22.1289 46.0113 23.474 45.0927C24.8519 44.1741 25.8689 42.9274 26.5251 41.3526H35.4324C34.5794 45.2895 32.693 48.4391 29.7731 50.8012C26.886 53.1306 23.2279 54.2953 18.7989 54.2953C15.4197 54.2953 12.4506 53.5571 9.89155 52.0807C7.33254 50.5716 5.34767 48.4719 3.93693 45.7816C2.55901 43.0914 1.87004 40.0239 1.87004 36.5791C1.87004 33.1342 2.55901 30.0667 3.93693 27.3765C5.34767 24.6862 7.33254 22.6029 9.89155 21.1266C12.4506 19.6174 15.4197 18.8629 18.7989 18.8629ZM52.9929 26.1954C55.716 26.1954 58.1437 26.7695 60.2762 27.9178C62.4415 29.0333 64.1311 30.6573 65.345 32.7898C66.5917 34.9223 67.2151 37.4157 67.2151 40.2699C67.2151 43.1242 66.5917 45.6176 65.345 47.7501C64.1311 49.8826 62.4415 51.523 60.2762 52.6713C58.1437 53.7867 55.716 54.3445 52.9929 54.3445C50.2699 54.3445 47.8257 53.7867 45.6604 52.6713C43.4951 51.523 41.789 49.8826 40.5423 47.7501C39.3285 45.6176 38.7215 43.1242 38.7215 40.2699C38.7215 37.4157 39.3285 34.9223 40.5423 32.7898C41.789 30.6573 43.4951 29.0333 45.6604 27.9178C47.8257 26.7695 50.2699 26.1954 52.9929 26.1954ZM52.9929 33.4787C51.3853 33.4787 50.0238 34.0693 48.9083 35.2504C47.8257 36.3986 47.2843 38.0718 47.2843 40.2699C47.2843 42.4681 47.8257 44.1413 48.9083 45.2895C50.0238 46.4378 51.3853 47.0119 52.9929 47.0119C54.6005 47.0119 55.9456 46.4378 57.0283 45.2895C58.1109 44.1413 58.6522 42.4681 58.6522 40.2699C58.6522 38.0718 58.1109 36.3986 57.0283 35.2504C55.9456 34.0693 54.6005 33.4787 52.9929 33.4787ZM107.159 26.2446C110.538 26.2446 113.195 27.2945 115.131 29.3942C117.067 31.4611 118.035 34.3481 118.035 38.0554V54H109.669V39.0396C109.669 37.3008 109.193 35.9557 108.241 35.0043C107.323 34.0201 106.06 33.5279 104.452 33.5279C102.779 33.5279 101.45 34.0529 100.466 35.1027C99.5146 36.1198 99.0389 37.5633 99.0389 39.4333V54H90.6237V39.0396C90.6237 37.3008 90.1644 35.9557 89.2458 35.0043C88.3271 34.0201 87.064 33.5279 85.4565 33.5279C83.7833 33.5279 82.4545 34.0365 81.4703 35.0535C80.4861 36.0705 79.994 37.5305 79.994 39.4333V54H71.5788V26.5399H79.994V31.215C80.7157 29.673 81.8148 28.4591 83.2911 27.5733C84.8003 26.6875 86.5555 26.2446 88.5568 26.2446C90.6565 26.2446 92.5101 26.7367 94.1177 27.721C95.7253 28.6724 96.9392 30.0503 97.7594 31.8547C98.7108 30.1487 100.007 28.7872 101.647 27.7702C103.32 26.7531 105.158 26.2446 107.159 26.2446ZM140.752 26.1954C143.015 26.1954 145.033 26.7695 146.805 27.9178C148.609 29.0333 150.02 30.6573 151.037 32.7898C152.087 34.8895 152.612 37.3829 152.612 40.2699C152.612 43.1242 152.087 45.6176 151.037 47.7501C150.02 49.8826 148.609 51.523 146.805 52.6713C145.033 53.7867 143.015 54.3445 140.752 54.3445C138.652 54.3445 136.847 53.8688 135.338 52.9173C133.829 51.9659 132.73 50.67 132.041 49.0296V67.0903H123.626V26.5399H132.041V31.5103C132.73 29.8699 133.829 28.574 135.338 27.6225C136.847 26.6711 138.652 26.1954 140.752 26.1954ZM138.045 33.5772C136.273 33.5772 134.813 34.1841 133.665 35.398C132.55 36.5791 131.992 38.2031 131.992 40.2699C131.992 42.304 132.55 43.928 133.665 45.1419C134.813 46.3558 136.273 46.9627 138.045 46.9627C139.849 46.9627 141.293 46.3722 142.376 45.1911C143.491 44.01 144.049 42.3696 144.049 40.2699C144.049 38.1702 143.491 36.5299 142.376 35.3488C141.293 34.1677 139.849 33.5772 138.045 33.5772ZM167.411 26.1954C169.511 26.1954 171.315 26.6711 172.824 27.6225C174.334 28.574 175.449 29.8699 176.171 31.5103V26.5399H184.537V54H176.171V49.0296C175.449 50.67 174.334 51.9659 172.824 52.9173C171.315 53.8688 169.511 54.3445 167.411 54.3445C165.147 54.3445 163.113 53.7867 161.309 52.6713C159.537 51.523 158.127 49.8826 157.077 47.7501C156.06 45.6176 155.551 43.1242 155.551 40.2699C155.551 37.3829 156.06 34.8895 157.077 32.7898C158.127 30.6573 159.537 29.0333 161.309 27.9178C163.113 26.7695 165.147 26.1954 167.411 26.1954ZM170.118 33.5772C168.313 33.5772 166.853 34.1677 165.738 35.3488C164.655 36.5299 164.114 38.1702 164.114 40.2699C164.114 42.3696 164.655 44.01 165.738 45.1911C166.853 46.3722 168.313 46.9627 170.118 46.9627C171.889 46.9627 173.333 46.3558 174.448 45.1419C175.597 43.928 176.171 42.304 176.171 40.2699C176.171 38.2031 175.597 36.5791 174.448 35.398C173.333 34.1841 171.889 33.5772 170.118 33.5772ZM198.746 31.7071C199.796 30.0339 201.141 28.7052 202.781 27.721C204.455 26.7367 206.259 26.2446 208.195 26.2446V35.2504H205.783C203.552 35.2504 201.813 35.7261 200.567 36.6775C199.353 37.6289 198.746 39.2365 198.746 41.5002V54H190.331V26.5399H198.746V31.7071ZM237.799 39.5318C237.799 40.2207 237.717 40.9753 237.553 41.7955H218.508C218.606 43.8624 219.131 45.3551 220.083 46.2738C221.034 47.1596 222.248 47.6025 223.724 47.6025C224.971 47.6025 226.004 47.2908 226.825 46.6675C227.645 46.0441 228.186 45.2403 228.449 44.2561H237.356C236.995 46.1917 236.208 47.9306 234.994 49.4725C233.78 50.9817 232.238 52.1792 230.368 53.065C228.498 53.918 226.415 54.3445 224.118 54.3445C221.428 54.3445 219.033 53.7867 216.933 52.6713C214.866 51.523 213.242 49.8826 212.061 47.7501C210.88 45.6176 210.29 43.1242 210.29 40.2699C210.29 37.3829 210.864 34.8895 212.012 32.7898C213.193 30.6573 214.833 29.0333 216.933 27.9178C219.033 26.7695 221.428 26.1954 224.118 26.1954C226.841 26.1954 229.236 26.7531 231.303 27.8686C233.37 28.9841 234.961 30.5588 236.076 32.5929C237.225 34.5942 237.799 36.9071 237.799 39.5318ZM229.285 38.2523C229.318 36.4478 228.826 35.1027 227.809 34.2169C226.825 33.2983 225.594 32.839 224.118 32.839C222.576 32.839 221.297 33.2983 220.28 34.2169C219.262 35.1355 218.688 36.4806 218.557 38.2523H229.285ZM260.453 41.7955V54H252.038V19.2073H265.669C269.803 19.2073 272.953 20.2408 275.118 22.3077C277.283 24.3418 278.366 27.0976 278.366 30.5752C278.366 32.7406 277.874 34.6762 276.889 36.3822C275.938 38.0554 274.511 39.3841 272.608 40.3684C270.705 41.3198 268.392 41.7955 265.669 41.7955H260.453ZM264.734 35.0535C268.113 35.0535 269.803 33.5607 269.803 30.5752C269.803 27.5241 268.113 25.9986 264.734 25.9986H260.453V35.0535H264.734ZM290.922 31.7071C291.972 30.0339 293.317 28.7052 294.957 27.721C296.63 26.7367 298.435 26.2446 300.37 26.2446V35.2504H297.959C295.728 35.2504 293.989 35.7261 292.743 36.6775C291.529 37.6289 290.922 39.2365 290.922 41.5002V54H282.507V26.5399H290.922V31.7071ZM303.105 18.8136C303.105 17.5341 303.564 16.4843 304.483 15.6641C305.402 14.8111 306.616 14.3846 308.125 14.3846C309.634 14.3846 310.848 14.8111 311.766 15.6641C312.685 16.4843 313.144 17.5341 313.144 18.8136C313.144 20.0603 312.685 21.1102 311.766 21.9632C310.848 22.7834 309.634 23.1935 308.125 23.1935C306.616 23.1935 305.402 22.7834 304.483 21.9632C303.564 21.1102 303.105 20.0603 303.105 18.8136ZM312.308 26.5399V54H303.892V26.5399H312.308ZM330.519 26.1954C334.062 26.1954 337.031 27.1796 339.426 29.1481C341.821 31.0838 343.331 33.7576 343.954 37.1696H335.047C334.784 35.9885 334.243 35.0699 333.423 34.4138C332.602 33.7576 331.569 33.4295 330.322 33.4295C328.846 33.4295 327.632 34.0201 326.681 35.2011C325.729 36.3494 325.253 38.039 325.253 40.2699C325.253 42.5009 325.729 44.2069 326.681 45.388C327.632 46.5362 328.846 47.1104 330.322 47.1104C331.569 47.1104 332.602 46.7823 333.423 46.1261C334.243 45.47 334.784 44.5514 335.047 43.3703H343.954C343.331 46.7823 341.821 49.4725 339.426 51.441C337.031 53.3767 334.062 54.3445 330.519 54.3445C327.829 54.3445 325.434 53.7867 323.334 52.6713C321.267 51.523 319.643 49.8826 318.462 47.7501C317.281 45.6176 316.691 43.1242 316.691 40.2699C316.691 37.3829 317.265 34.8895 318.413 32.7898C319.594 30.6573 321.234 29.0333 323.334 27.9178C325.434 26.7695 327.829 26.1954 330.519 26.1954ZM374.429 39.5318C374.429 40.2207 374.347 40.9753 374.183 41.7955H355.138C355.236 43.8624 355.761 45.3551 356.712 46.2738C357.664 47.1596 358.878 47.6025 360.354 47.6025C361.601 47.6025 362.634 47.2908 363.454 46.6675C364.275 46.0441 364.816 45.2403 365.078 44.2561H373.986C373.625 46.1917 372.837 47.9306 371.624 49.4725C370.41 50.9817 368.868 52.1792 366.998 53.065C365.128 53.918 363.044 54.3445 360.748 54.3445C358.057 54.3445 355.663 53.7867 353.563 52.6713C351.496 51.523 349.872 49.8826 348.691 47.7501C347.51 45.6176 346.919 43.1242 346.919 40.2699C346.919 37.3829 347.493 34.8895 348.642 32.7898C349.823 30.6573 351.463 29.0333 353.563 27.9178C355.663 26.7695 358.057 26.1954 360.748 26.1954C363.471 26.1954 365.866 26.7531 367.933 27.8686C370 28.9841 371.591 30.5588 372.706 32.5929C373.854 34.5942 374.429 36.9071 374.429 39.5318ZM365.915 38.2523C365.948 36.4478 365.456 35.1027 364.439 34.2169C363.454 33.2983 362.224 32.839 360.748 32.839C359.206 32.839 357.926 33.2983 356.909 34.2169C355.892 35.1355 355.318 36.4806 355.187 38.2523H365.915ZM388.805 26.1954C392.283 26.1954 395.055 27.0648 397.122 28.8036C399.222 30.5424 400.534 32.839 401.059 35.6933H393.185C392.956 34.5778 392.431 33.7084 391.61 33.085C390.823 32.4289 389.822 32.1008 388.608 32.1008C387.657 32.1008 386.935 32.3141 386.443 32.7406C385.951 33.1342 385.705 33.7084 385.705 34.463C385.705 35.316 386.148 35.9557 387.034 36.3822C387.952 36.8087 389.379 37.2352 391.315 37.6617C393.415 38.1538 395.137 38.6624 396.482 39.1873C397.827 39.6794 398.992 40.4996 399.976 41.6479C400.961 42.7961 401.453 44.3381 401.453 46.2738C401.453 47.8485 401.026 49.2429 400.173 50.4568C399.32 51.6706 398.09 52.6221 396.482 53.311C394.875 54 392.972 54.3445 390.774 54.3445C387.067 54.3445 384.097 53.5243 381.866 51.8839C379.636 50.2435 378.274 47.8978 377.782 44.8466H385.902C386.033 46.0277 386.525 46.9299 387.378 47.5533C388.264 48.1766 389.396 48.4883 390.774 48.4883C391.725 48.4883 392.447 48.275 392.939 47.8485C393.431 47.3892 393.677 46.7987 393.677 46.0769C393.677 45.1255 393.218 44.4529 392.299 44.0592C391.414 43.6327 389.954 43.1898 387.92 42.7305C385.885 42.304 384.212 41.8447 382.9 41.3526C381.588 40.8605 380.456 40.0731 379.504 38.9904C378.553 37.875 378.077 36.3658 378.077 34.463C378.077 32.0024 379.012 30.0175 380.882 28.5084C382.752 26.9664 385.393 26.1954 388.805 26.1954Z"
          fill="#20253A"
        />
      </svg>
      <div className="comingsoon__section__content">
        <img
          className="comingsoon__section__content__img"
          src={comingsoon}
          alt="comingsoon"
        />
        <div className="comingsoon__section__content__overlay">
          <ComingSoonForm />
        </div>
      </div>
    </div>
  );
}
