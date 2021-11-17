import { useEffect } from 'react';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              <img src="/icon/logo.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                <li className="nav-item my-auto">
                  <a className="nav-link active" aria-current="page" href="/#">Home</a>
                </li>
                <li className="nav-item my-auto">
                  <a className="nav-link" href="/#">Recipes</a>
                </li>
                <li className="nav-item my-auto">
                  <a className="nav-link" href="/#">Rewards</a>
                </li>

                <li className="nav-item my-auto">
                  <a className="nav-link" href="/#">Discover</a>
                </li>
                <li className="nav-item my-auto me-lg-20">
                  <a className="nav-link" href="/#">Food Rank</a>
                </li>
                <li className="nav-item my-auto">
                  <a
                    className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                    href="./src/sign-in.html"
                    role="button"
                  >
                    Sign
                    In

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <section className="header pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="row gap-lg-0 gap-5">
            <div className="col-lg-6 col-12 my-auto">
              <p className="text-support text-lg color-palette-2">
                Hello Chef,
              </p>
              <h1 className="header-title color-palette-1 fw-bold">
                Find recipes
                {' '}
                <span className="d-sm-inline d-none">and</span>
                <span className="d-sm-none d-inline">
                  and
                </span>
                <span className="underline-blue"> All</span>
                {' '}
                <br className="d-sm-block d-none" />
                {' '}
                <span
                  className="underline-blue"
                >
                  Ingredients
                </span>
                {' '}
                here
              </h1>
              <p className="mt-30 mb-40 text-lg color-palette-1">
                Kami juga menyediakan tutorial untuk membantu
                <br
                  className="d-md-block d-none"
                />
                {' '}
                kamu dalam memasak menu makanan yang spesial.
              </p>
              <div className="d-flex flex-lg-row flex-column gap-4">
                <a className="btn btn-get text-lg text-white rounded-pill" href="/#feature" role="button">
                  Mulai eksplor

                </a>
                <a className="btn-learn text-lg color-palette-1 my-auto text-center" href="/#" role="button">
                  Pelajari
                  Lebih
                  Lanjut
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 d-lg-block d-none">
              <div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
                <div className="position-relative" data-aos="zoom-in">
                  <img src="/img/Header-1.png" className="img-fluid" alt="" />
                  <div className="card left-card position-absolute border-0">
                    <div className="d-flex align-items-center mb-16 gap-3">
                      <img
                        src="/img/Header-2.png"
                        width="40"
                        height="40"
                        className="rounded-pill"
                        alt=""
                      />
                      <div>
                        <p className="text-sm fw-medium color-palette-1 m-0">Shayna Anne</p>
                        <p className="text-xs fw-light color-palette-2 m-0">Food Blogger</p>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                          fill="#FEBD57"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                          fill="#FEBD57"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                          fill="#FEBD57"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                          fill="#FEBD57"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                          fill="#FEBD57"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="card right-card position-absolute border-0">
                    <div className="position-relative d-flex flex-row justify-content-center mb-24">
                      <img src="/img/Header-3.png" className="rounded-pill" alt="" />
                      <p className="right-card-support text-white text-xxs text-center position-absolute m-0">
                        New

                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-center m-0 fw-medium color-palette-1">Lann Knight</p>
                      <p className="fw-light text-center m-0 color-palette-2 text-xs">Cook Helper</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="feature" className="feature pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
            It’s Really That
            <br />
            {' '}
            Easy to Cook the Food
          </h2>
          <div className="row gap-lg-0 gap-4" data-aos="fade-up">
            <div className="col-lg-4">
              <div className="card feature-card border-0">
                <svg
                  className="mb-30"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0-icon1"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                  </mask>
                  <g mask="url(#mask0-icon1)">
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                    <mask
                      id="mask1"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x="-12"
                      y="23"
                      width="67"
                      height="73"
                    >
                      <path d="M-12 23H33C45.1503 23 55 32.8497 55 45V96H-12V23Z" fill="#4D17E2" />
                    </mask>
                    <g mask="url(#mask1)">
                      <path d="M-12 23H33C45.1503 23 55 32.8497 55 45V96H-12V23Z" fill="#695DE9" />
                      <path
                        d="M37 55H-4"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M23 64L-4 64"
                        stroke="#B7B0F4"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect x="23" y="13" width="52" height="34" rx="13" fill="#5C52C7" />
                    </g>
                    <rect x="27" y="16" width="41" height="27" rx="13" fill="#2B2467" />
                    <circle cx="47.5" cy="29.5" r="5.5" stroke="white" strokeWidth="4" />
                  </g>
                </svg>
                <p className="fw-semibold text-2xl mb-2 color-palette-1">1. Start</p>
                <p className="text-lg color-palette-1 mb-0">
                  Pilih salah satu resep makanan
                  <br />
                  yang ingin kamu buat

                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card feature-card border-0">
                <svg
                  className="mb-30"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0-icon2"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                  </mask>
                  <g mask="url(#mask0-icon2)">
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                    <rect x="-14" y="16" width="62" height="82" rx="16" fill="#695DE9" />
                    <path
                      d="M32 36H5"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M27 45L9 45"
                      stroke="#B7B0F4"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect x="56" y="37" width="49" height="75" rx="16" fill="#2B2467" />
                    <path
                      d="M97 50H70"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M92 59L74 59"
                      stroke="#6B63AC"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <p className="fw-semibold text-2xl mb-2 color-palette-1">2. Fill Up</p>
                <p className="text-lg color-palette-1 mb-0">
                  Beli paket resep makanan yang
                  <br />
                  sudah disediakan

                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card feature-card border-0">
                <svg
                  className="mb-30"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0-icon3"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                  </mask>
                  <g mask="url(#mask0-icon3)">
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                    <rect x="13" y="25" width="54" height="61" rx="16" fill="#695DE9" />
                    <path
                      d="M50 46L50 68"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M40 54L40 68"
                      stroke="#B7B0F4"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30 60L30 68"
                      stroke="#B7B0F4"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="40" cy="26" r="14" fill="#2B2467" />
                    <path
                      d="M39.0489 18.927C39.3483 18.0057 40.6517 18.0057 40.9511 18.9271L42.0206 22.2188C42.1545 22.6309 42.5385 22.9098 42.9717 22.9098H46.4329C47.4016 22.9098 47.8044 24.1494 47.0207 24.7188L44.2205 26.7533C43.87 27.0079 43.7234 27.4593 43.8572 27.8713L44.9268 31.1631C45.2261 32.0844 44.1717 32.8506 43.388 32.2812L40.5878 30.2467C40.2373 29.9921 39.7627 29.9921 39.4122 30.2467L36.612 32.2812C35.8283 32.8506 34.7739 32.0844 35.0732 31.1631L36.1428 27.8713C36.2766 27.4593 36.13 27.0079 35.7795 26.7533L32.9793 24.7188C32.1956 24.1494 32.5984 22.9098 33.5671 22.9098H37.0283C37.4615 22.9098 37.8455 22.6309 37.9794 22.2188L39.0489 18.927Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <p className="fw-semibold text-2xl mb-2 color-palette-1">3. Ready to Cook</p>
                <p className="text-lg color-palette-1 mb-0">
                  Bahan makanan siap dimasak
                  <br />
                  sesuai resep di aplikasi

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Our Featured
            <br />
            {' '}
            Recipes This Year
          </h2>
          <div
            className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
            data-aos="fade-up"
          >
            <div className="featured-game-card position-relative">
              <a href="./src/detail.html">
                <div className="blur-sharp">
                  <img src="/img/Thumbnail-1.jpg" width="205" height="270" alt="" />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                  <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto" />
                    <div>
                      <p className="fw-semibold text-white text-xl m-0">Nasi Gurih</p>
                      <p className="fw-light text-white m-0">Breakfast</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="featured-game-card position-relative">
              <a href="./src/detail.html">
                <div className="blur-sharp">
                  <img src="/img/Thumbnail-2.jpg" width="205" height="270" alt="" />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                  <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto" />
                    <div>
                      <p className="fw-semibold text-white text-xl m-0">Rendang</p>
                      <p className="fw-light text-white m-0">Lunch</p>
                    </div>
                  </div>
                </div>
              </a>

            </div>
            <div className="featured-game-card position-relative">
              <a href="./src/detail.html">
                <div className="blur-sharp">
                  <img src="/img/Thumbnail-3.jpg" width="205" height="270" alt="" />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                  <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto" />
                    <div>
                      <p className="fw-semibold text-white text-xl m-0">Salad</p>
                      <p className="fw-light text-white m-0">Lunch</p>
                    </div>
                  </div>
                </div>
              </a>

            </div>
            <div className="featured-game-card position-relative">
              <a href="./src/detail.html">
                <div className="blur-sharp">
                  <img src="/img/Thumbnail-4.jpg" width="205" height="270" alt="" />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                  <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto" />
                    <div>
                      <p className="fw-semibold text-white text-xl m-0">Indomie</p>
                      <p className="fw-light text-white m-0">Snack</p>
                    </div>
                  </div>
                </div>
              </a>

            </div>
            <div className="featured-game-card position-relative">
              <a href="./src/detail.html">
                <div className="blur-sharp">
                  <img src="/img/Thumbnail-5.jpg" width="205" height="270" alt="" />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                  <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto" />
                    <div>
                      <p className="fw-semibold text-white text-xl m-0">Soto Tangkar</p>
                      <p className="fw-light text-white m-0">Dinner</p>
                    </div>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>

      <section className="reached pt-50 pb-50">
        <div className="container-fluid">
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
            <div className="me-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">290M+</p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">Ingredients Sold Out</p>
            </div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">12.500</p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">Recipes Available</p>
            </div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">99,9%</p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">Happy Customers</p>
            </div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">4.7</p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">Rating Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <section className="story pt-50 pb-50">
        <div className="container-xxl container-fluid">
          <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
            <div className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60" data-aos="zoom-in">
              <img src="/img/Header-9.jpg" width="612" height="452" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-5 col-12 ps-lg-60">
              <div className="">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                  Cook new food
                  <br />
                  {' '}
                  <span className="underline-blue">EVERY DAY.</span>
                </h2>
                <p className="text-lg color-palette-1 mb-30">
                  Kami menyediakan jutaan resep
                  <br
                    className="d-sm-block d-none"
                  />
                  untuk membantu kamu menyiapkan
                  <br className="d-sm-block d-none" />
                  {' '}
                  menu makanan baru setiap hari

                </p>
                <div className="d-md-block d-flex flex-column w-100">
                  <a className="btn btn-read text-lg rounded-pill" href="/#" role="button">Baca Cerita</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer pt-50">
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 text-lg-start text-center">
                <a href="/#" className="mb-30">
                  <img src="/icon/logo.png" alt="" />
                </a>
                <p className="mt-30 text-lg color-palette-1 mb-30">
                  Foodist membantu kamu memasak
                  <br />
                  {' '}
                  menu makanan baru
                  setiap hari

                </p>
                <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
              </div>
              <div className="col-lg-8 mt-lg-0 mt-20">
                <div className="row gap-sm-0">
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a href="/#" className="text-lg color-palette-1 text-decoration-none">About Us</a>
                      </li>
                      <li className="mb-6">
                        <a href="/#" className="text-lg color-palette-1 text-decoration-none">
                          Press
                          Release

                        </a>
                      </li>
                      <li className="mb-6">
                        <a href="/#" className="text-lg color-palette-1 text-decoration-none">Terms of Use</a>
                      </li>
                      <li className="mb-6">
                        <a href="/#" className="text-lg color-palette-1 text-decoration-none">
                          Privacy &
                          Policy

                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a href="/#" className="text-lg color-palette-1 text-decoration-none">
                          Refund
                          Policy

                        </a>
                      </li>
                      <li className="mb-6">
                        <a href="/#" className="text-lg color-palette-1 text-decoration-none">
                          Unlock
                          Rewards

                        </a>
                      </li>
                      <li className="mb-6">
                        <a href="/#" className="text-lg color-palette-1 text-decoration-none">
                          Live
                          Chatting

                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a
                          href="mailto: hi@foodist.ig"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          hi@foodist.id

                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="mailto: team@store.gg"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          team@foodist.id

                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="http://maps.google.com/?q=Pasific 12,
                                        Jakarta Selatan"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Pasific
                          12,
                          Jakarta Selatan

                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="tel: 02111229090"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          021 - 1122 -
                          9090

                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
