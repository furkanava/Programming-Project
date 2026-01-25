<!-- Without Sign In - Home -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Rzeszow Party Planner</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Theme Configuration -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f425af",
                        "background-light": "#f8f5f7",
                        "background-dark": "#22101c",
                        "surface-dark": "#311c29", 
                        "surface-light": "#ffffff",
                    },
                    fontFamily: {
                        "display": ["Spline Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
</head>
<body class="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col overflow-x-hidden antialiased selection:bg-primary selection:text-white">
<!-- Top Navigation -->
<header class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
<div class="px-4 md:px-10 py-3 max-w-[1200px] mx-auto flex items-center justify-between">
<!-- Logo Section -->
<div class="flex items-center gap-3">
<div class="flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[32px]">celebration</span>
</div>
<h1 class="text-slate-900 dark:text-white text-lg font-bold tracking-tight hidden sm:block">
                    Rzeszow Party Planner
                </h1>
</div>
<!-- Navigation Links -->
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Home</a>
<a class="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Events</a>
<a class="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Forum</a>
</nav>
<!-- Action Buttons -->
<div class="flex items-center gap-3">
<button class="hidden sm:flex h-10 px-6 items-center justify-center rounded-full text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                    Login
                </button>
<button class="flex h-10 px-6 items-center justify-center rounded-full bg-primary text-white text-sm font-bold shadow-[0_0_15px_rgba(244,37,175,0.4)] hover:shadow-[0_0_25px_rgba(244,37,175,0.6)] hover:scale-105 transition-all duration-300">
                    Register
                </button>
</div>
</div>
</header>
<!-- Main Content Wrapper -->
<main class="flex-grow flex flex-col items-center w-full">
<!-- Hero Section -->
<section class="w-full max-w-[1200px] px-4 md:px-10 py-8 md:py-12">
<div class="@container">
<div class="relative overflow-hidden rounded-xl md:rounded-[2.5rem] min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center text-center p-6 md:p-12 gap-6 bg-cover bg-center group" data-alt="Abstract nightlife gradient with blurred city lights and vibrant pink and purple hues" style="background-image: linear-gradient(rgba(34, 16, 28, 0.4), rgba(34, 16, 28, 0.8)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-fTmDo3GbiHCBs87nTuVSJKjqkJ5Gc53WflGvph00Kl8S0NUp11q0-Bare3zdFTxLtuiXosiesRtjpmgJDyDxYynOD0PSGY3_FqDxOABDc1Y704Qs_Ihy_RhjiyGHd9hA7IJjES8o9tcflfhYb6xr-XF0WrVQxvhTvKXsq5j1KGG9wt4WlNPdbG4PRcsNkAItto3pTOzs-kXw0E8EfR8AWXDrdbKc7b6V4f77pSrk921nFZ2gvriCXcC_mXEmWx3EPMgGvCbKJQc');">
<!-- Decorative overlay gradient for better text contrast -->
<div class="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent"></div>
<div class="relative z-10 flex flex-col items-center gap-4 max-w-3xl">
<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold uppercase tracking-wider text-white mb-2">
<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Live in Rzeszow
                        </span>
<h2 class="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                            Plan. Party.<br/>
<span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-primary">Connect in Rzeszow.</span>
</h2>
<p class="text-lg md:text-xl text-gray-200 max-w-xl font-normal leading-relaxed mt-2">
                            The easiest way to organize gatherings, track RSVPs, and discover the hottest events happening in your city tonight.
                        </p>
<div class="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
<button class="h-12 px-8 rounded-full bg-primary text-white text-base font-bold shadow-[0_4px_20px_rgba(244,37,175,0.4)] hover:bg-primary/90 hover:scale-105 transition-all duration-200">
                                Start Planning
                            </button>
<button class="h-12 px-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-base font-bold hover:bg-white/20 transition-all duration-200">
                                Browse Events
                            </button>
</div>
</div>
</div>
</div>
</section>
<!-- Features Section -->
<section class="w-full max-w-[1200px] px-4 md:px-10 py-12 md:py-20">
<div class="flex flex-col gap-12">
<div class="flex flex-col gap-4 text-center md:text-left max-w-2xl">
<h3 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Why Rzeszow Party Planner?
                    </h3>
<p class="text-slate-600 dark:text-gray-400 text-lg">
                        All the tools you need to make your social life vibrant, organized, and unforgettable.
                    </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- Feature 1 -->
<div class="group flex flex-col p-8 rounded-[2rem] bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-colors duration-300 shadow-xl dark:shadow-none">
<div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
<span class="material-symbols-outlined text-3xl">calendar_month</span>
</div>
<h4 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Smart Scheduling</h4>
<p class="text-slate-600 dark:text-gray-400 leading-relaxed">
                            Coordinate with friends easily. Propose dates, vote on the best times, and sync everything to your personal calendar.
                        </p>
</div>
<!-- Feature 2 -->
<div class="group flex flex-col p-8 rounded-[2rem] bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-colors duration-300 shadow-xl dark:shadow-none">
<div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
<span class="material-symbols-outlined text-3xl">groups</span>
</div>
<h4 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Guest Management</h4>
<p class="text-slate-600 dark:text-gray-400 leading-relaxed">
                            Keep track of who's coming, who's bringing what, and manage your guest list in real-time with instant notifications.
                        </p>
</div>
<!-- Feature 3 -->
<div class="group flex flex-col p-8 rounded-[2rem] bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-colors duration-300 shadow-xl dark:shadow-none">
<div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
<span class="material-symbols-outlined text-3xl">map</span>
</div>
<h4 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Local Discoveries</h4>
<p class="text-slate-600 dark:text-gray-400 leading-relaxed">
                            Explore a curated map of the hottest venues in Rzeszow. From underground clubs to scenic rooftop bars.
                        </p>
</div>
</div>
</div>
</section>
<!-- Events Carousel Section -->
<section class="w-full max-w-[1200px] px-4 md:px-10 pb-20 pt-4">
<div class="flex items-center justify-between mb-8 px-2">
<h3 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Upcoming Public Events
                </h3>
<a class="hidden sm:flex items-center gap-1 text-primary font-bold text-sm hover:underline" href="#">
                    View all <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<!-- Scroll Container -->
<div class="relative group/carousel">
<div class="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
<!-- Event Card 1 -->
<div class="min-w-[280px] md:min-w-[340px] snap-start flex flex-col gap-4 p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 shadow-lg dark:shadow-none hover:shadow-xl transition-shadow duration-300 cursor-pointer">
<div class="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
<div class="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110" data-alt="Crowd dancing at a techno club with laser lights" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVF7dP6EqJczmyBnxpanavhm2Jhx1IVvbCKeqP5mzsZil7_JUQAd7dno1-UHzg0VKIPpK8LQyC8Uym2imwxouuzAhFLyY-dKpiwN8nSF_fVr8YqxwU7PwtnLVwI7QngGhr2s7ov6gZBiKe3H9Vg0Q62XYPyCYVNiCDRo-Xy19CRFdQp4yeKQt69AhptK3sKzktofrbS7rAjfet7pCpkFS4gDucBPUIADvBHBaam6--dLiZFDIiOgrxtp5StTiiQ0Zlhyifasur_w4');">
</div>
<div class="absolute top-3 left-3 bg-background-dark/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                                Oct 24
                            </div>
<div class="absolute bottom-3 right-3 bg-primary text-white p-2 rounded-full shadow-lg">
<span class="material-symbols-outlined text-sm block">favorite</span>
</div>
</div>
<div>
<div class="flex justify-between items-start mb-1">
<h4 class="text-slate-900 dark:text-white text-lg font-bold truncate pr-4">Techno Night Rzeszow</h4>
</div>
<div class="flex items-center gap-1 text-slate-500 dark:text-gray-400 text-sm mb-3">
<span class="material-symbols-outlined text-[18px]">location_on</span>
                                Market Square
                            </div>
<div class="flex gap-2">
<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 text-xs font-medium">Music</span>
<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 text-xs font-medium">Nightlife</span>
</div>
</div>
</div>
<!-- Event Card 2 -->
<div class="min-w-[280px] md:min-w-[340px] snap-start flex flex-col gap-4 p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 shadow-lg dark:shadow-none hover:shadow-xl transition-shadow duration-300 cursor-pointer">
<div class="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
<div class="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110" data-alt="Street food stalls with warm lighting in a park evening setting" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0V9hx_ZqLGwB0ujQx03PXpH3B4s-YRpvtnv20RnSXsKK4XBE-eb6kDgA3EgB5rZzbSRvfU857O6kqlUIxKo4R9tt5QMKsa4hRHqEfiETpT7WFWmTbceLB5QQvgsamDwdvhi13H_s-V7Iv3DGEusZ4CEsw1Y8iSnyHz7s49WAAogBX_Ex8gw-1c5r-V8cmtFFD8hSgDrL3Xlq-tqoI4JUnO5qXhNeni9zsymbBAXFKOcj7vKmyfGYdK41l3rvmoD1NswULEGr6aRw');">
</div>
<div class="absolute top-3 left-3 bg-background-dark/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                                Oct 26
                            </div>
</div>
<div>
<div class="flex justify-between items-start mb-1">
<h4 class="text-slate-900 dark:text-white text-lg font-bold truncate pr-4">Street Food Festival</h4>
</div>
<div class="flex items-center gap-1 text-slate-500 dark:text-gray-400 text-sm mb-3">
<span class="material-symbols-outlined text-[18px]">location_on</span>
                                Riverside Park
                            </div>
<div class="flex gap-2">
<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 text-xs font-medium">Food</span>
<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 text-xs font-medium">Outdoor</span>
</div>
</div>
</div>
<!-- Event Card 3 -->
<div class="min-w-[280px] md:min-w-[340px] snap-start flex flex-col gap-4 p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 shadow-lg dark:shadow-none hover:shadow-xl transition-shadow duration-300 cursor-pointer">
<div class="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
<div class="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110" data-alt="Close up of a jazz musician playing saxophone in dim light" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8QDRHZ81rnFWkcLrKsPVyVTUcZXog-agdI5Gvnc9cJlBzLE121rmmGVmXIe-5dfgCyTeUkbbAB8tJ5lAtoKskEwEaVhuercJGj5BpA0swh8a93BcGxRZQBu00eLWXQ5nKqlD6NLaLYhIxo3JHwn9W4vLljn7xkmjLA1jgc7Z4KHKuzkcwO4s9HAo5wVEvLwQ7hJyr9MO0-mkWzAKAHY_i5p-vcW8f6umO50YYFnb5JiJ6kJH5mLUhB5wjj0S_zbiBBz58kpN1CcM');">
</div>
<div class="absolute top-3 left-3 bg-background-dark/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                                Oct 30
                            </div>
</div>
<div>
<div class="flex justify-between items-start mb-1">
<h4 class="text-slate-900 dark:text-white text-lg font-bold truncate pr-4">Jazz &amp; Wine Night</h4>
</div>
<div class="flex items-center gap-1 text-slate-500 dark:text-gray-400 text-sm mb-3">
<span class="material-symbols-outlined text-[18px]">location_on</span>
                                Philharmonic Hall
                            </div>
<div class="flex gap-2">
<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 text-xs font-medium">Arts</span>
<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 text-xs font-medium">Wine</span>
</div>
</div>
</div>
<!-- Event Card 4 -->
<div class="min-w-[280px] md:min-w-[340px] snap-start flex flex-col gap-4 p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 shadow-lg dark:shadow-none hover:shadow-xl transition-shadow duration-300 cursor-pointer">
<div class="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
<div class="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110" data-alt="People doing yoga in a park during sunset" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCd8yBJOfJW1gLeeG2Vczo1dyVixgHuA-RLgaq3wA1qIRBF_509TaB50Wrv8FkIMNTZGh_mJ94I5r0G_VIu_z7aKtNi6gfbzQVqW2ONnwGfv44lFb6olKdfuk-cX22CzfakF3jnIYsWDxbTAFGEjOXspzOMai6mRu7c6tLO_8SUK6hpS7cuuDqC81G1MfMXwG_vc12OsbSUhNIcRxQvheFPfSRCXTc9fhzJUWadUg6hryNW-VzfoKRV8r7SJtGopWRDrZirSUbuNng');">
</div>
<div class="absolute top-3 left-3 bg-background-dark/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                                Nov 02
                            </div>
</div>
<div>
<div class="flex justify-between items-start mb-1">
<h4 class="text-slate-900 dark:text-white text-lg font-bold truncate pr-4">Sunset Yoga</h4>
</div>
<div class="flex items-center gap-1 text-slate-500 dark:text-gray-400 text-sm mb-3">
<span class="material-symbols-outlined text-[18px]">location_on</span>
                                City Gardens
                            </div>
<div class="flex gap-2">
<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 text-xs font-medium">Wellness</span>
<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 text-xs font-medium">Free</span>
</div>
</div>
</div>
</div>
<!-- Gradient Fade for Scroll Indication -->
<div class="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent pointer-events-none hidden md:block"></div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full border-t border-gray-200 dark:border-white/5 bg-background-light dark:bg-background-dark py-12">
<div class="max-w-[1200px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div class="flex flex-col gap-2">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-[24px]">celebration</span>
<span class="text-slate-900 dark:text-white font-bold text-lg">Rzeszow Party Planner</span>
</div>
<p class="text-slate-500 dark:text-gray-500 text-sm">© 2023 Rzeszow Party Planner. All rights reserved.</p>
</div>
<div class="flex gap-8 flex-wrap">
<a class="text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-primary transition-colors" href="#">About</a>
<a class="text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-primary transition-colors" href="#">Privacy</a>
<a class="text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-primary transition-colors" href="#">Terms</a>
<a class="text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-primary transition-colors" href="#">Contact</a>
</div>
<div class="flex gap-4">
<a class="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-white hover:bg-primary hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">alternate_email</span>
</a>
<a class="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-white hover:bg-primary hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">share</span>
</a>
</div>
</div>
</footer>
</body></html>

<!-- Sign In - Home (Dashboard) -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Rzeszow Party Planner - Dashboard</title>
<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f425af",
                        "background-light": "#f8f5f7",
                        "background-dark": "#22101c",
                        "card-dark": "#392833", // Derived from example for consistency
                        "text-subtle": "#ba9cb0",
                    },
                    fontFamily: {
                        "display": ["Spline Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar for webkit */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #22101c; 
        }
        ::-webkit-scrollbar-thumb {
            background: #392833; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #f425af; 
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white">
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<!-- Top Navigation -->
<header class="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-neutral-200 dark:border-[#392833] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4 md:px-10">
<div class="flex items-center gap-4">
<div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
<span class="material-symbols-outlined text-2xl">celebration</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">Rzeszow Party Planner</h2>
</div>
<div class="flex items-center gap-8">
<nav class="hidden md:flex items-center gap-9">
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
<a class="text-sm font-medium text-slate-500 dark:text-text-subtle hover:text-primary transition-colors" href="#">Events</a>
<a class="text-sm font-medium text-slate-500 dark:text-text-subtle hover:text-primary transition-colors" href="#">Forum</a>
</nav>
<div class="flex items-center gap-4">
<button class="flex items-center justify-center text-slate-500 dark:text-text-subtle hover:text-primary transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 ring-2 ring-primary/50 cursor-pointer" data-alt="User profile avatar of a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrmSEUCtfQps8H3F0_BuMkZcnt090BN3paZrzrIMbu5YnIH7bFomZCxQjOdlYVB9fMpBk0o6hoON55sg5ICOru4P_Vpdciu4cbZbQ4jn6sbFc4g3befqzM3xI8Bl5f1y1HOuE7R-aPUcsT_n0wZlcBdPJHvK1LzxOh-ASNo3LAijPDrxyKgsskt931Cf4145_3gt7EYgjPaNmWXzyyZvlQgbaJgkTH5jwYbbLevo0aQlnc5xJ4Lfo0ph8JjBNEbvxV7AInslYIAvM");'></div>
<button class="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-slate-200 dark:bg-[#392833] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-300 dark:hover:bg-[#4a3442] transition-colors">
<span class="truncate">Logout</span>
</button>
</div>
</div>
</header>
<div class="flex flex-1 justify-center py-5 px-4 md:px-10 lg:px-40">
<div class="flex flex-col max-w-[1200px] flex-1 w-full gap-8">
<!-- Hero / Welcome Section -->
<div class="flex flex-wrap items-center justify-between gap-6 rounded-xl bg-gradient-to-r from-background-dark via-[#392833] to-primary/20 p-8 shadow-lg border border-[#392833]">
<div class="flex min-w-72 flex-col gap-3">
<h1 class="text-3xl md:text-4xl font-black leading-tight tracking-tight">Welcome back, Party Animal!</h1>
<p class="text-text-subtle text-base font-normal">Ready to create unforgettable memories in Rzeszow tonight?</p>
</div>
<button class="flex items-center gap-2 cursor-pointer justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold shadow-[0_0_20px_rgba(244,37,175,0.4)] hover:shadow-[0_0_30px_rgba(244,37,175,0.6)] hover:bg-primary/90 transition-all transform hover:-translate-y-0.5">
<span class="material-symbols-outlined text-[20px]">add</span>
<span class="truncate">Create Event</span>
</button>
</div>
<!-- Stats Row -->
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div class="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#392833] shadow-sm hover:shadow-md transition-shadow border border-neutral-100 dark:border-none group">
<div class="flex items-center justify-between">
<p class="text-slate-500 dark:text-text-subtle text-base font-medium">Total Events</p>
<span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">event_note</span>
</div>
<p class="text-3xl font-bold leading-tight">3</p>
</div>
<div class="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#392833] shadow-sm hover:shadow-md transition-shadow border border-neutral-100 dark:border-none group">
<div class="flex items-center justify-between">
<p class="text-slate-500 dark:text-text-subtle text-base font-medium">Today's Events</p>
<span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">today</span>
</div>
<p class="text-3xl font-bold leading-tight">1</p>
<div class="h-1 w-full bg-slate-100 dark:bg-black/20 rounded-full mt-2 overflow-hidden">
<div class="h-full bg-primary w-1/3 rounded-full"></div>
</div>
</div>
<div class="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#392833] shadow-sm hover:shadow-md transition-shadow border border-neutral-100 dark:border-none group">
<div class="flex items-center justify-between">
<p class="text-slate-500 dark:text-text-subtle text-base font-medium">New Participants</p>
<span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">group_add</span>
</div>
<p class="text-3xl font-bold leading-tight">5</p>
<div class="flex -space-x-2 overflow-hidden pt-2">
<img alt="New user 1" class="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-[#392833]" data-alt="Portrait of a smiling young man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVwjhAvyq0mcLqE7ymBVw80t-ljZfOa4z171wnCo5kAfbERPkQddS2sooWRFtGs0ToZb78zss705HReqYvE_j6dcV1K5RIsHnWUTpRoATiwsMy7FmnAYYGjWWKqy-b-G9IUaSN042OC6iXXHs8EA_nOdU6_Hy3KF2L_UyStbsYRaFAtr6faazEAoqkRzlJWAT2hk9A8idK4dG2vARTiTPnn0irXI-Y6GyUnvCCK7p6p7mZcgLhcZxpI3AAh5ZnZCjN8c-t-oHqUzE"/>
<img alt="New user 2" class="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-[#392833]" data-alt="Portrait of a man with glasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw04IGnyvEFZzG4ZQbDfSjqcy1IZpS-L2hZVDw6zfgoIl2eDYuDvSQLdpQSjJQWfMb9IRLImRJZKDZ4dSCUPKf0Y7nibxzmM60kMC5YojNAmxY3WM8jtBTu2wsuT8swMkW5sz9pC8Fobmv3g3u9HMeKu6SmaTh-zAc-IZcU7eF3Fokwf_vFJ75RWwGkGG7uRwNjRjdamS5jEPCkmRX1579vgheDfwFxSgVntRWqtdm2lwz0y8KlJ_2zazfIDgf6iUovr4eT5m2Hi0"/>
<img alt="New user 3" class="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-[#392833]" data-alt="Portrait of a smiling woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-9Y5s5hHwSOQMLq00ntY1tB8dHdolVMuN8A9JfDSWFnlaaXhyBHyHLDYW_Wt6bWcMPJofMWct_CdPGqce1jOsNy-m0wHRUdLzT0z-O3JHO6iK1P8Svm9siRmB2orZvsU_eikWHTDdjmXCTiPr6zeYLnQespqMalk0eFM-UONCWrMpC0zxdDSv1G6isDrKBooW1wUmZsKmD4uDa6NING6KGe20ZPsc4fBGgDx7aD0A47Qq_vizugueiiXbFfVCaspLsi0zZOxI4O8"/>
</div>
</div>
</div>
<!-- Main Content & Sidebar -->
<div class="flex flex-col lg:flex-row gap-8">
<!-- Events Section -->
<div class="flex-1 flex flex-col gap-4">
<div class="flex items-center justify-between pb-2">
<h2 class="text-[22px] font-bold leading-tight tracking-[-0.015em]">Upcoming Events</h2>
<a class="text-sm text-primary font-medium hover:underline" href="#">View all</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Card 1 -->
<div class="group flex flex-col gap-4 rounded-xl bg-white dark:bg-[#392833] p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 dark:border-none">
<div class="relative w-full aspect-video overflow-hidden rounded-lg">
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<div class="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500" data-alt="Crowd of people at a pub with dim lighting" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjZjSYtFHogPXfpwcYOWNJgTXha4jNIAx0Ps727B9atRLuDoRv3zx7Dmz3sNo4R4H2tmlqyL4JDSHAXRBBsgLP5_GVneJ9o_v011HOnFTL-wti1nr5W4kCswg0YeaQM6xjnZUH-1Pe2IDTvozhJ78l6dR0kam_hz9J8f4TgF7_-aFASqJt65L77ns8ump6XlKGgGzB1DWk1LBxYcQVOMD8Q5RO0KgzletqJlmYf3EAC9GpJbngNQmDYbMna-t5mNkhbAHMHoFxgOE");'></div>
<div class="absolute bottom-3 left-3 z-20 flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded text-xs font-semibold text-white">
<span class="material-symbols-outlined text-[14px]">schedule</span>
<span>Today, 8 PM</span>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="flex justify-between items-start">
<h3 class="text-lg font-bold leading-tight group-hover:text-primary transition-colors">Market Square Pub Crawl</h3>
<button class="text-slate-400 hover:text-white transition-colors"><span class="material-symbols-outlined">more_vert</span></button>
</div>
<div class="flex items-center gap-2 text-slate-500 dark:text-text-subtle text-sm">
<span class="material-symbols-outlined text-[16px] text-primary">location_on</span>
<span>Rynek Główny, Rzeszow</span>
</div>
<div class="flex items-center justify-between mt-2 pt-3 border-t border-slate-100 dark:border-white/10">
<div class="flex -space-x-2">
<div class="h-7 w-7 rounded-full ring-2 ring-white dark:ring-[#392833] bg-gray-300 bg-cover bg-center" data-alt="User avatar 1" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBARv3j2ylpY1xt92GKBfMsGYUyT6jK-Js0224l6ycNl7afYGsVT-INU7YKXFxTMmTjRWimPBAquGh1w1LJqq5lgpWKnTo2A1LVH_ZRAJr3R1Wr3v5cI_63PgUJa_2LF1kw_63Hxc2ei2LOan2o_J5GljU1ONGsQsX5wNCLFmygAFsrh2tbLBxppYlVkw1qfs5dRM3D7BnPglCoEa_6MMXN0OpGejJvF2iwWrZxnDF3zWfWWppsehw0GMRTLZ_Up-5HSm9CbKaI4Sw")'></div>
<div class="h-7 w-7 rounded-full ring-2 ring-white dark:ring-[#392833] bg-gray-300 bg-cover bg-center" data-alt="User avatar 2" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDoB3--Ay-USzuMH-Oy2a31HQkJXMLjOvLBJny8-ZY0qiqHUoRVjOmmuHN6uRr8NxBgFlnhiY7r-SaOHCiGPPiBac_M3OfW-cbGoOqviIW0qHLZ9yoK33tuLxRfysnwRJW8Vjy8419JgbLwmFFegqvjHK6NSZZbv5XthzFuFlS6nrVzuOGqvaOu_Vt8PfEQvNtRiiz5ywu3S9B7haRrMx289ljCeDVb62ViegTpfi9KU9Nnp-Tuxs2NnsICRQ71vrDJSTkz4USLvHI")'></div>
<div class="flex h-7 w-7 items-center justify-center rounded-full ring-2 ring-white dark:ring-[#392833] bg-neutral-200 dark:bg-neutral-700 text-[10px] font-bold text-neutral-600 dark:text-neutral-300">+10</div>
</div>
<button class="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-xs font-bold hover:bg-primary hover:text-white transition-colors">Manage</button>
</div>
</div>
</div>
<!-- Card 2 -->
<div class="group flex flex-col gap-4 rounded-xl bg-white dark:bg-[#392833] p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 dark:border-none">
<div class="relative w-full aspect-video overflow-hidden rounded-lg">
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<div class="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500" data-alt="Friends playing board games on a table" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdNFT__mcmXUg1-dv39jFHuQOWy5w5ParMxSdf2hvFjtjfK-1tdyo7cGSowk9TIZYaaJ12ta_tKgS_jho_LzwJrcdBDGhoGb-vOiuxqsZM_cjuNPUKScC1OqZfEHOnDYswzx14P-eH6_Eq0_K_m17dGL_Mc42emqiHhknXAqK1SC2jsjMsqvJzvNNfCeBgD7mJluyuAK7SI8zCkaxpNu05GT8YJ6E3k_HgmwIngJ2j6hQx3SS6vkrG2iBtFax-dfPKIZ98j8XoyQE");'></div>
<div class="absolute bottom-3 left-3 z-20 flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded text-xs font-semibold text-white">
<span class="material-symbols-outlined text-[14px]">schedule</span>
<span>Sat, 6 PM</span>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="flex justify-between items-start">
<h3 class="text-lg font-bold leading-tight group-hover:text-primary transition-colors">Board Games Night</h3>
<button class="text-slate-400 hover:text-white transition-colors"><span class="material-symbols-outlined">more_vert</span></button>
</div>
<div class="flex items-center gap-2 text-slate-500 dark:text-text-subtle text-sm">
<span class="material-symbols-outlined text-[16px] text-primary">location_on</span>
<span>CyberMachina, Rzeszow</span>
</div>
<div class="flex items-center justify-between mt-2 pt-3 border-t border-slate-100 dark:border-white/10">
<div class="flex -space-x-2">
<div class="h-7 w-7 rounded-full ring-2 ring-white dark:ring-[#392833] bg-gray-300 bg-cover bg-center" data-alt="User avatar 3" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPJhJz8iwne7FtuKiYcbTauS3lYTSkzuqvln5XBbwmYU2PjVRIrHuLkBilvo_CCK0OjgW_MRof2vMYCbl44pCTFaXuKtGEiUodR9fF_TslmfFqev8L1HB-XzZTu6uNV6rSoAkKw1s3OpSjDMerTf6mg6dmyWBNcQ_4Q9_oWfSGcY1Hsdtw_4BxDksJ280YHLvK5ykMNufKN5vA8KnOAFZzU_5QuLCn0qg4VeO-1l2zZngpzV3K5OdV4KJAyRioZssipzw5Dedomvo")'></div>
<div class="flex h-7 w-7 items-center justify-center rounded-full ring-2 ring-white dark:ring-[#392833] bg-neutral-200 dark:bg-neutral-700 text-[10px] font-bold text-neutral-600 dark:text-neutral-300">+3</div>
</div>
<button class="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-xs font-bold hover:bg-primary hover:text-white transition-colors">Manage</button>
</div>
</div>
</div>
<!-- Card 3 -->
<div class="group flex flex-col gap-4 rounded-xl bg-white dark:bg-[#392833] p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 dark:border-none">
<div class="relative w-full aspect-video overflow-hidden rounded-lg">
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<div class="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500" data-alt="People sitting on a blanket in a park having a picnic" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuADjV6_aXcfYiUkQOGmRA6uQp3AVessnA446Rl7wRy4UFMEJXKVYu0fJgv6IzuW18sEOo1TKmALBaW84xXAFm43LN1PzKJys-Cevrvjjr_n8H4GOUgs70DgTH5bN9ZFLniiMASjezIFF9-J8emmxIxUbGQYqrhuO2yAAVCISAPjGW_Wn8D9ehLYzAedh0K33yvGYH_tzJIDVnosLhyv4qlno6ze1OxiYRucBKNfbaBg8_vygm9agd6m3rUdKFaoEMgfh3FhsjB96GE");'></div>
<div class="absolute bottom-3 left-3 z-20 flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded text-xs font-semibold text-white">
<span class="material-symbols-outlined text-[14px]">schedule</span>
<span>Sun, 2 PM</span>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="flex justify-between items-start">
<h3 class="text-lg font-bold leading-tight group-hover:text-primary transition-colors">Sunday Park Picnic</h3>
<button class="text-slate-400 hover:text-white transition-colors"><span class="material-symbols-outlined">more_vert</span></button>
</div>
<div class="flex items-center gap-2 text-slate-500 dark:text-text-subtle text-sm">
<span class="material-symbols-outlined text-[16px] text-primary">location_on</span>
<span>Olszynki Park, Rzeszow</span>
</div>
<div class="flex items-center justify-between mt-2 pt-3 border-t border-slate-100 dark:border-white/10">
<div class="flex -space-x-2">
<div class="h-7 w-7 rounded-full ring-2 ring-white dark:ring-[#392833] bg-gray-300 bg-cover bg-center" data-alt="User avatar 4" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6oQDKKRboBNjoFUjprA4h5ootkAmkx22HqZj3kDWWL9VVzA0FjUq9-Q7BX3yDwX38y2p08ike5C3d1SkJHGA6jRmHMYVUP6rlpdOaT1_4Uo38GaniIjEt1NEdyBPiPXyPehWF9fqN08hzOrpT6z-IMj0gD-8nPq3ghzawxRTEf0_2N9HIkGKgXsW7AfTNCCPE_n9TABGAVNLvurJUGXRsRVPLSJSI_9L_DRPlfVSpQ82wR0vsf_W5NTSxEVLfQ9r-33g1nya0WLk")'></div>
<div class="h-7 w-7 rounded-full ring-2 ring-white dark:ring-[#392833] bg-gray-300 bg-cover bg-center" data-alt="User avatar 5" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRyUcAmif24SXeNsq10Nxk79MHgLP5a7E-JYh8k2xNOxpN2ug7VQTifq6LQVT7Yct7zjI8wllauZFV8vDFHEMJne4WomXYj2Azb1lvux82AMiq4zvIZcv_gakedlPi_3jGG_3qEz4jLCzxKCq2G_VvIM1TyEwFxA3WeQfiikOf4ygrb8E_r_T66lEo56apEnNWAwrt168qt9neAtjfaGNOluaDmYWbHFN3YhR1JF4Br8UlUJDIfwFN0JbWLkT_dn4hNVa1o4L0dOE")'></div>
<div class="flex h-7 w-7 items-center justify-center rounded-full ring-2 ring-white dark:ring-[#392833] bg-neutral-200 dark:bg-neutral-700 text-[10px] font-bold text-neutral-600 dark:text-neutral-300">+6</div>
</div>
<button class="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-xs font-bold hover:bg-primary hover:text-white transition-colors">Manage</button>
</div>
</div>
</div>
</div>
</div>
<!-- Recent Activity Sidebar -->
<div class="w-full lg:w-80 flex flex-col gap-6">
<div class="flex items-center justify-between pb-2 border-b border-neutral-200 dark:border-[#392833]">
<h2 class="text-lg font-bold leading-tight">Recent Activity</h2>
</div>
<div class="flex flex-col gap-4">
<!-- Activity Item 1 -->
<div class="flex gap-3 items-start p-3 rounded-lg hover:bg-white dark:hover:bg-[#392833] transition-colors cursor-pointer group">
<div class="relative">
<div class="h-10 w-10 rounded-full bg-gray-300 bg-cover bg-center" data-alt="User avatar 6" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5TzdZYYkz1k65hcT5oAlkiRnEqJM_-Nsh5Z0RVa-WXmrjLLatdSj-dTWsj0u07EH6Jwxu8gYv8sIrxfZdw660Gx93uZIDI43mSyNLaE75BKNxlgmgZhVgKMgUVf6nRNdxkzJiOUtws17gnqJ6FkbjV_oCgIAFGR6udyIkI1aBQpDK-0Zs7-0RZQfKQ_eoJ5Al5FO_I8erm8CZWULIl9NdgffRuza7Y48zAaCj6gdTXvjCA0x2l2ApHr9jZvq82Z0YbHt7cHp45lI")'></div>
<div class="absolute -bottom-1 -right-1 bg-green-500 h-3 w-3 rounded-full border-2 border-background-light dark:border-background-dark"></div>
</div>
<div class="flex flex-col">
<p class="text-sm font-semibold">Anna K.</p>
<p class="text-xs text-slate-500 dark:text-text-subtle">Joined <span class="text-primary font-medium">Pub Crawl</span></p>
<p class="text-[10px] text-slate-400 mt-1">2 mins ago</p>
</div>
</div>
<!-- Activity Item 2 -->
<div class="flex gap-3 items-start p-3 rounded-lg hover:bg-white dark:hover:bg-[#392833] transition-colors cursor-pointer group">
<div class="relative">
<div class="h-10 w-10 rounded-full bg-gray-300 bg-cover bg-center" data-alt="User avatar 7" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7qiR4dVTbLebID2yAdtT5Ej5aajkk4DiBUPtNTDdsGKuqDsm_bV-y-k2QWJwp_AJtmfectFb6I7FLy7lUPpMKZ12rGvxbWVeAkAPF9N1ZR_1ez67Z-0EzQ12h3R8Ndr8KUa-1WbPNFi5s5HL9x3WHBA8SlVipwLvLWZN089YPmP01GlrztmhurBiH_WRzPb3jTocPyyzz52-5ahRjmhXtbP91w7XaXhcThprnDRcC8HsSg1yTjE5AjtT8WUVuG8NYEWl8KiegTos")'></div>
<div class="absolute -bottom-1 -right-1 bg-blue-500 h-3 w-3 rounded-full border-2 border-background-light dark:border-background-dark"></div>
</div>
<div class="flex flex-col">
<p class="text-sm font-semibold">Piotr W.</p>
<p class="text-xs text-slate-500 dark:text-text-subtle">Commented: "Is there parking?"</p>
<p class="text-[10px] text-slate-400 mt-1">15 mins ago</p>
</div>
</div>
<!-- Activity Item 3 -->
<div class="flex gap-3 items-start p-3 rounded-lg hover:bg-white dark:hover:bg-[#392833] transition-colors cursor-pointer group">
<div class="relative">
<div class="h-10 w-10 rounded-full bg-gray-300 bg-cover bg-center" data-alt="User avatar 8" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMMV-b90c-2Q2gDMLE6GtPOb4dnqe_N1W22nHDIOVMbthE6Lh3p2HQ2KrAnYVafuRdIf59aaO5fTOkwRIuAdxMV9j-ARJ_e-Tg9qNkMgmkaxPKvFrtq8HCVuD8hYIWzNrHqLY8BnztQUtlm9urGvvzCbWpt56iAMP9ALVHQrP7BIJ-9owLmFxdlGXz6NAoa4z4uPdNpyNUPc0reJCcuU_08ArjN0cHuKk5Of3nDb9WLb23eQJOf3V2OF4yGaaizAr0E3sNUj3D6RE")'></div>
<div class="absolute -bottom-1 -right-1 bg-green-500 h-3 w-3 rounded-full border-2 border-background-light dark:border-background-dark"></div>
</div>
<div class="flex flex-col">
<p class="text-sm font-semibold">Kasia M.</p>
<p class="text-xs text-slate-500 dark:text-text-subtle">Joined <span class="text-primary font-medium">Board Games</span></p>
<p class="text-[10px] text-slate-400 mt-1">1 hour ago</p>
</div>
</div>
</div>
<!-- Map Preview -->
<div class="rounded-xl overflow-hidden relative aspect-square bg-[#392833] shadow-md group">
<div class="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-100 transition-opacity duration-500" data-alt="Map view of Rzeszow city center" data-location="Rzeszow, Poland" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCticL7vQ3ePGIDBdaNbFvQNmmH8KTyTmyB361uqWrjcASPBIwbTlj0Wcp3FWPsABA82pIzRIy3vQd93HM2bFMFU031l9xqolQ6_jAeqbq3B1meJQOkkAxy_TuUjhYezeS11hnBQ73YswdgVxhXDCXi9tQPbAYnQke1ZNDYe5VYlNsT83IAArfKponZfMe6hTw74w7cqC7XFfW47wgLaVoI3ZE5VdXBAXqE5CuwoygyvS91AGdvmJRjT47o4If2DQxG41vnCrD49qM");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-4 left-4 right-4 text-white">
<p class="text-xs font-bold uppercase tracking-wider text-primary mb-1">Explore</p>
<p class="text-lg font-bold leading-tight">Events Map</p>
<button class="mt-2 w-full py-2 bg-white/10 backdrop-blur-sm hover:bg-primary rounded-full text-xs font-bold transition-colors">Open Map</button>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Floating Action Button -->
<button class="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 md:hidden">
<span class="material-symbols-outlined text-2xl">add</span>
</button>
</div>
</body></html>

<!-- Sign In Page -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Sign In - Rzeszow Party Planner</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Config -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f425af",
                        "background-light": "#f8f5f7",
                        "background-dark": "#22101c",
                        "surface-dark": "#2d1b27",
                        "surface-input": "#271b23",
                        "border-color": "#543b4c"
                    },
                    fontFamily: {
                        "display": ["Spline Sans", "sans-serif"],
                        "body": ["Noto Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar for better aesthetics */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #22101c; 
        }
        ::-webkit-scrollbar-thumb {
            background: #543b4c; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #f425af; 
        }
        
        /* Glassmorphism utility */
        .glass {
            background: rgba(45, 27, 39, 0.7);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .glass-header {
            background: rgba(34, 16, 28, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(84, 59, 76, 0.5);
        }
    </style>
</head>
<body class="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden">
<!-- Top Navigation Bar -->
<nav class="glass-header sticky top-0 z-50 w-full px-4 md:px-10 py-3">
<div class="max-w-7xl mx-auto flex items-center justify-between">
<!-- Logo Section -->
<div class="flex items-center gap-3 text-white">
<div class="size-8 flex items-center justify-center rounded-full bg-primary/20 text-primary">
<span class="material-symbols-outlined text-[20px]">celebration</span>
</div>
<h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Rzeszow Party Planner</h2>
</div>
<!-- Desktop Links -->
<div class="hidden md:flex flex-1 justify-end gap-8 items-center">
<div class="flex items-center gap-8">
<a class="text-slate-200 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Home</a>
<a class="text-slate-200 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Events</a>
<a class="text-slate-200 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Forum</a>
<a class="text-white text-sm font-bold leading-normal relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary" href="#">Login/Register</a>
</div>
</div>
<!-- Mobile Menu Icon (Placeholder) -->
<button class="md:hidden text-white">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</nav>
<!-- Main Content Area -->
<main class="flex-grow flex items-center justify-center p-4 md:p-8 relative">
<!-- Ambient Background Glow -->
<div class="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
<div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div class="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<!-- Left Column: Login Form -->
<div class="flex flex-col justify-center max-w-[480px] w-full mx-auto lg:mx-0">
<div class="mb-8">
<h1 class="text-3xl md:text-4xl font-bold text-white mb-2">Welcome back to the party!</h1>
<p class="text-slate-400 text-lg">Manage your Rzeszow events in one place.</p>
</div>
<form class="flex flex-col gap-5">
<!-- Email Field -->
<div class="flex flex-col gap-2">
<label class="text-white text-sm font-medium ml-2" for="email">Email Address</label>
<div class="relative">
<input class="w-full bg-surface-input border border-border-color text-white text-base rounded-full h-12 px-5 focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-500" id="email" placeholder="name@example.com" type="email"/>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">mail</span>
</div>
</div>
<!-- Password Field -->
<div class="flex flex-col gap-2">
<div class="flex justify-between items-center ml-2 mr-1">
<label class="text-white text-sm font-medium" for="password">Password</label>
<a class="text-primary text-sm font-medium hover:underline" href="#">Forgot Password?</a>
</div>
<div class="relative">
<input class="w-full bg-surface-input border border-border-color text-white text-base rounded-full h-12 px-5 focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-500" id="password" placeholder="Enter your password" type="password"/>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer hover:text-white transition-colors">visibility</span>
</div>
</div>
<!-- Actions -->
<div class="flex flex-col gap-4 mt-4">
<button class="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-transform active:scale-[0.98] shadow-lg shadow-primary/20 flex items-center justify-center gap-2" type="button">
<span>Sign In</span>
<span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
<div class="relative flex py-2 items-center">
<div class="flex-grow border-t border-border-color"></div>
<span class="flex-shrink-0 mx-4 text-slate-500 text-sm">Or continue with</span>
<div class="flex-grow border-t border-border-color"></div>
</div>
<button class="w-full h-12 bg-surface-dark border border-border-color hover:bg-border-color/50 text-white font-medium rounded-full transition-colors flex items-center justify-center gap-3" type="button">
<!-- Simple Google SVG Icon -->
<svg class="w-5 h-5" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M23.5 12.2C23.5 11.4 23.4 10.6 23.2 9.9H12V14.3H18.5C18.2 15.9 17.3 17.2 16 18.1L19.8 21.1C22 19 23.5 15.9 23.5 12.2Z" fill="#4285F4"></path>
<path d="M12 24C15.2 24 17.9 22.9 19.8 21.1L16 18.1C15 18.9 13.6 19.3 12 19.3C8.9 19.3 6.3 17.2 5.3 14.3L1.5 17.3C3.5 21.3 7.5 24 12 24Z" fill="#34A853"></path>
<path d="M5.3 14.3C5 13.4 4.9 12.5 4.9 11.5C4.9 10.6 5 9.7 5.3 8.8L1.5 5.8C0.5 7.6 0 9.5 0 11.5C0 13.6 0.5 15.5 1.5 17.3L5.3 14.3Z" fill="#FBBC05"></path>
<path d="M12 3.7C13.7 3.7 15.3 4.3 16.5 5.5L19.9 2.1C17.9 0.2 15.2 -0.3 12 0.5C7.5 0.5 3.5 3.2 1.5 7.2L5.3 10.2C6.3 7.3 8.9 5.2 12 3.7Z" fill="#EA4335"></path>
</svg>
                            Login with Google
                        </button>
</div>
<p class="text-center text-slate-400 mt-2">
                        Don't have an account? 
                        <a class="text-primary font-bold hover:underline" href="#">Register</a>
</p>
</form>
</div>
<!-- Right Column: My Events Widget (Desktop only mainly) -->
<div class="hidden lg:flex flex-col items-center justify-center">
<div class="glass w-full max-w-md rounded-[2rem] p-6 relative overflow-hidden group">
<!-- Decorative background image -->
<div class="absolute inset-0 z-0">
<img alt="Blurred night city view of Rzeszow with neon lights" class="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" data-alt="Blurred night city view of Rzeszow with neon lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvYTW0K3Cw4irqsyhmvAQXNnotKoE_SfQXmvdmCR96_TmA0vbOdP2v2vyTS8v1DSmYPcE3vMiXgua1dbtmOXt8qZoNXxplWzNICHLX9Aryt8lHTi_Ma0MpxtQ4f8h7YiaBYVfBYfEHYmye7R0dNCy8mUVqtMsb9gMrJ-JGM57tqFO_BVQPmW1XVXLeP8TINITfAulhy2BKnJCdwMHOvhsbU70YdKeM5sdrBjQNpBbS1vorz7l_DmGodFBkq_pLPGfIOD9dOdyZKBs"/>
<div class="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
</div>
<!-- Content -->
<div class="relative z-10">
<div class="flex items-center justify-between mb-6">
<h3 class="text-xl font-bold text-white flex items-center gap-2">
<span class="material-symbols-outlined text-primary">event_note</span>
                                My Events
                            </h3>
<span class="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white backdrop-blur-sm">Upcoming</span>
</div>
<div class="space-y-4">
<!-- Event Item 1 -->
<div class="bg-surface-dark/60 backdrop-blur-md p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-colors cursor-default">
<div class="flex justify-between items-start mb-2">
<span class="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Today</span>
<span class="material-symbols-outlined text-slate-400 text-sm">more_horiz</span>
</div>
<h4 class="text-white font-bold leading-tight mb-1">Rzeszow Market Square Meetup</h4>
<div class="flex items-center gap-4 text-xs text-slate-400">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">schedule</span>
                                        18:00
                                    </div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">group</span>
                                        12 Going
                                    </div>
</div>
</div>
<!-- Event Item 2 -->
<div class="bg-surface-dark/60 backdrop-blur-md p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-colors cursor-default">
<div class="flex justify-between items-start mb-2">
<span class="bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">In Jan</span>
<span class="material-symbols-outlined text-slate-400 text-sm">more_horiz</span>
</div>
<h4 class="text-white font-bold leading-tight mb-1">Techno Night @ Club XYZ</h4>
<div class="flex items-center gap-4 text-xs text-slate-400">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">schedule</span>
                                        22:00
                                    </div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">confirmation_number</span>
                                        Tickets Ready
                                    </div>
</div>
</div>
</div>
<div class="mt-6 pt-4 border-t border-white/10 text-center">
<a class="text-sm text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1" href="#">
                                View all events
                                <span class="material-symbols-outlined text-[16px]">chevron_right</span>
</a>
</div>
</div>
</div>
</div>
</div>
</main>
</body></html>

<!-- Register Page -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Rzeszow Party Planner - Register</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f425af",
                        "background-light": "#f8f5f7",
                        "background-dark": "#22101c",
                        "surface-dark": "#392833",
                        "text-secondary": "#ba9cb0"
                    },
                    fontFamily: {
                        "display": ["Spline Sans", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "1rem",
                        "lg": "2rem",
                        "xl": "3rem", 
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar for webkit */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #22101c; 
        }
        ::-webkit-scrollbar-thumb {
            background: #392833; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #f425af; 
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 dark:border-b-surface-dark bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-6 lg:px-10 py-3">
<div class="flex items-center gap-4">
<div class="size-8 text-primary">
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
<path clip-rule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">Rzeszow Party Planner</h2>
</div>
<div class="flex flex-1 justify-end gap-4 lg:gap-8">
<nav class="hidden md:flex items-center gap-6 lg:gap-9">
<a class="text-slate-600 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Home</a>
<a class="text-slate-600 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Events</a>
<a class="text-slate-600 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Forum</a>
</nav>
<a class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors" href="#">
<span class="truncate">Log In</span>
</a>
</div>
</header>
<!-- Main Content Area -->
<main class="relative flex-1 flex flex-col items-center justify-center p-4 lg:p-0 min-h-[calc(100vh-65px)]">
<!-- Background Image with Overlay -->
<div class="absolute inset-0 z-0">
<div class="absolute inset-0 bg-gradient-to-br from-background-dark/95 via-background-dark/80 to-primary/30 z-10"></div>
<img alt="Blurred neon lights at a night party event" class="w-full h-full object-cover" data-alt="Blurred neon lights at a night party event" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsrMTHI9nXRX2ryBk9_OOPSUZ-tcLtkUGOSBoryeNFD2D39fq7UKw-CdHj2GjB69RSZZft9H1RoU6TppXUVWiJSH9yAGKebxz_6b8ftD1BMJ47ye19N20h84cb0fJQSFyUM8hUjJK2QDolBBNVU_fZ-e5qSxjIW6uCI4jcVVOQpoLP84q8soHAollDq4p6Xfcwk0RU936SNf6pTRNthT_TpEyjD7ZWo-Er9hT8iask8bcyjBUELmLG3rW8woaVrIM_Efooeass57U"/>
</div>
<div class="relative z-10 layout-container flex w-full max-w-7xl mx-auto flex-col lg:flex-row items-center gap-10 lg:gap-20 px-4 lg:px-20 py-10">
<!-- Left Side: Heading & Intro -->
<div class="flex flex-col gap-6 text-center lg:text-left max-w-xl lg:flex-1">
<div class="flex flex-col gap-3">
<h1 class="text-white text-5xl lg:text-7xl font-black leading-tight tracking-[-0.033em]">
                        Join the <span class="text-primary">Party</span>
</h1>
<p class="text-gray-300 text-lg lg:text-xl font-normal leading-relaxed">
                        Create your account to manage events, RSVP to the hottest parties in Rzeszow, and connect with the community.
                    </p>
</div>
<div class="hidden lg:flex gap-4 mt-4">
<div class="flex -space-x-3">
<img alt="User avatar 1" class="w-10 h-10 rounded-full border-2 border-background-dark object-cover" data-alt="Portrait of a young woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvdY2JHbCdaAVC806wb0Ibo9M13fB4z85KkwJYAMLqmX5dl6Hg66r_K1debukAN044eNksf0IH5B075ib14yfBaaWiImoUeQwDNzWLdSOgReCVgZ5z14T7_PpEO_d4YpdodQUbcHunzoP9ZdHHG4dF0Vq88AUin-rJlKhN9cq8MU41A69qMO0AEwmJ3V8OGYm-Hehx-Y_D5ImggTVylbgq7PKljSA6-AajAiu9rQxhgLgQR7IRRYwpTRN1jPI_kSbi5p5O13gtqds"/>
<img alt="User avatar 2" class="w-10 h-10 rounded-full border-2 border-background-dark object-cover" data-alt="Portrait of a young man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5eN8BD5sVBJQiqxyfT8EsteAt0b1itf0ID9dORC4-7nq12mSdcj64I5Y4wvaiYEx7OzxXt0rWq7nPYk0CjQb1J7yxfu6RrxvOY4vBsQ4lo8BYeXPQa9AEyir1O8xk6niAoHYWVLy3HQ3t2ytVFu1J8I2jc4b-ca9QbzgBY8QIPScTRRnTgIUGS5ejvPD9YtYDcQSze1nNdV4h8kxlV2Vt3vbIf1qkcNycSvU1KcneGkK_tEE6lU0Tduo491Usy7Obwjz3qJ-CatE"/>
<img alt="User avatar 3" class="w-10 h-10 rounded-full border-2 border-background-dark object-cover" data-alt="Portrait of a man smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-stu5JL3eFFU9R7s-ePzM2geA6X1OB072njDv_D1IT_PFeSbgGVpduDOarQLLneC2XF9H2I3pgvR-meBKGsUeeWzVkX_jIQzM3bsTEsnWkEtz_b-P4JrjPhx1v4qNaTUTRHtm3FlwKl71AfA7vawdDFzQrcfVoj9JpLtWotQjOa4puOc8MKGG6hxh35cE5aPOlB7udMjJPU5xEE9mwO9O8FGe5Js0YOno1BRQ3LWtxg62fmIr94QC5WH-ZXbyhr3vDqVvp1ZSlVo"/>
<div class="w-10 h-10 rounded-full border-2 border-background-dark bg-surface-dark flex items-center justify-center text-xs font-bold text-white">+2k</div>
</div>
<p class="text-text-secondary text-sm my-auto">Party goers joined last month</p>
</div>
</div>
<!-- Right Side: Registration Card -->
<div class="w-full max-w-md lg:flex-1">
<div class="bg-surface-dark/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 lg:p-8 shadow-2xl">
<h3 class="text-white text-2xl font-bold mb-6">Create Account</h3>
<form class="flex flex-col gap-5">
<!-- Email Input -->
<label class="flex flex-col gap-2">
<span class="text-text-secondary text-sm font-medium ml-2">Email Address</span>
<div class="relative flex items-center">
<span class="absolute left-4 text-text-secondary material-symbols-outlined">mail</span>
<input class="form-input flex w-full rounded-full bg-background-dark/50 border border-white/10 text-white focus:outline-0 focus:ring-2 focus:ring-primary focus:border-transparent h-12 pl-12 pr-4 placeholder:text-gray-500 text-sm font-normal transition-all" placeholder="yourname@example.com" type="email"/>
</div>
</label>
<!-- Password Input -->
<label class="flex flex-col gap-2">
<span class="text-text-secondary text-sm font-medium ml-2">Password</span>
<div class="relative flex items-center">
<span class="absolute left-4 text-text-secondary material-symbols-outlined">lock</span>
<input class="form-input flex w-full rounded-full bg-background-dark/50 border border-white/10 text-white focus:outline-0 focus:ring-2 focus:ring-primary focus:border-transparent h-12 pl-12 pr-12 placeholder:text-gray-500 text-sm font-normal transition-all" placeholder="Create a strong password" type="password"/>
<button class="absolute right-4 text-text-secondary hover:text-white flex items-center justify-center" type="button">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</label>
<!-- Confirm Password Input -->
<label class="flex flex-col gap-2">
<span class="text-text-secondary text-sm font-medium ml-2">Confirm Password</span>
<div class="relative flex items-center">
<span class="absolute left-4 text-text-secondary material-symbols-outlined">lock_reset</span>
<input class="form-input flex w-full rounded-full bg-background-dark/50 border border-white/10 text-white focus:outline-0 focus:ring-2 focus:ring-primary focus:border-transparent h-12 pl-12 pr-4 placeholder:text-gray-500 text-sm font-normal transition-all" placeholder="Repeat password" type="password"/>
</div>
</label>
<!-- Submit Button -->
<button class="mt-2 w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2" type="button">
<span>Get Started</span>
<span class="material-symbols-outlined text-sm font-bold">arrow_forward</span>
</button>
<!-- Divider -->
<div class="flex items-center gap-4 my-2">
<div class="h-px bg-white/10 flex-1"></div>
<span class="text-text-secondary text-xs font-medium uppercase tracking-wider">Or register with</span>
<div class="h-px bg-white/10 flex-1"></div>
</div>
<!-- Social Login -->
<div class="grid grid-cols-2 gap-4">
<button class="h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center gap-2 transition-all" type="button">
<svg class="w-5 h-5" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
<span class="text-white text-sm font-medium">Google</span>
</button>
<button class="h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center gap-2 transition-all" type="button">
<svg aria-hidden="true" class="w-5 h-5 text-[#1877F2]" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path>
</svg>
<span class="text-white text-sm font-medium">Facebook</span>
</button>
</div>
</form>
<div class="mt-6 text-center">
<p class="text-text-secondary text-sm">
                            Already have an account? 
                            <a class="text-primary hover:text-primary/80 font-semibold ml-1" href="#">Log In</a>
</p>
</div>
</div>
</div>
</div>
</main>
<!-- Simple Footer -->
<footer class="w-full py-6 text-center bg-background-dark/95 border-t border-white/5">
<div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs text-text-secondary">
<span>© 2024 Rzeszow Party Planner.</span>
<div class="flex gap-4">
<a class="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>
</body></html>

<!-- Registration Confirmed -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Registration Confirmed - Rzeszow Party Planner</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700;900&amp;family=Spline+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f425af",
                        "background-light": "#f8f5f7",
                        "background-dark": "#22101c",
                        "surface-dark": "#2d1b26",
                    },
                    fontFamily: {
                        "display": ["Spline Sans", "sans-serif"],
                        "body": ["Noto Sans", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
<!-- Top Navigation -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#392833] px-6 lg:px-10 py-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
<div class="flex items-center gap-4">
<div class="size-8 text-primary flex items-center justify-center rounded-lg bg-primary/10">
<span class="material-symbols-outlined">celebration</span>
</div>
<h2 class="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">Rzeszow Party Planner</h2>
</div>
<div class="flex flex-1 justify-end gap-8 items-center">
<nav class="hidden md:flex items-center gap-9">
<a class="text-slate-600 dark:text-gray-300 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors" href="#">Home</a>
<a class="text-slate-600 dark:text-gray-300 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors" href="#">Events</a>
<a class="text-slate-600 dark:text-gray-300 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors" href="#">Forum</a>
</nav>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary hover:bg-primary/90 transition-all text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/25">
<span class="truncate">Login / Register</span>
</button>
</div>
</header>
<!-- Main Content Area -->
<main class="flex-grow flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
<!-- Background decoration -->
<div class="absolute inset-0 overflow-hidden pointer-events-none">
<div class="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-50"></div>
<div class="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] opacity-30"></div>
</div>
<div class="relative w-full max-w-[560px] flex flex-col">
<!-- Central Card -->
<div class="flex flex-col items-center p-8 md:p-12 bg-white dark:bg-[#2d1b26] rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-white/5">
<!-- Success Visual -->
<div class="mb-8 relative group">
<div class="absolute inset-0 bg-primary/30 blur-xl rounded-full scale-110"></div>
<div class="relative flex items-center justify-center size-24 rounded-full bg-gradient-to-br from-primary to-purple-600 shadow-xl shadow-primary/20 ring-4 ring-white dark:ring-[#2d1b26]">
<span class="material-symbols-outlined text-white text-[3rem]">check_circle</span>
</div>
</div>
<!-- Text Content -->
<div class="flex flex-col items-center gap-4 text-center max-w-[440px]">
<h1 class="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                        You're on the list!
                    </h1>
<div class="flex flex-col gap-2">
<p class="text-slate-600 dark:text-gray-300 text-base md:text-lg font-normal leading-relaxed">
                            Your account has been successfully created.
                        </p>
<p class="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">
                            We've sent a confirmation email to <strong class="text-slate-800 dark:text-white font-semibold">user@email.com</strong>. Please click the link inside to activate your account and start planning events in Rzeszow.
                        </p>
</div>
</div>
<!-- Primary Action -->
<div class="flex flex-col items-center w-full gap-5 mt-10">
<button class="flex w-full max-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary hover:bg-primary/90 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/30 text-white text-base font-bold leading-normal tracking-wide">
<span class="truncate">Continue to Login</span>
</button>
</div>
</div>
<!-- Meta / Secondary Actions -->
<div class="mt-8 text-center flex flex-col gap-3">
<p class="text-slate-500 dark:text-[#ba9cb0] text-sm font-medium">
                    Didn't receive the email? 
                    <a class="text-primary hover:text-primary/80 ml-1 underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-all" href="#">Resend Confirmation</a>
</p>
<div class="flex items-center justify-center gap-2 text-slate-400 dark:text-white/30 text-xs">
<span class="material-symbols-outlined text-[1.1em]">info</span>
<span>Check your spam folder just in case!</span>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="py-8 border-t border-slate-200 dark:border-white/5 mt-auto">
<div class="container mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-4">
<p class="text-slate-400 dark:text-white/40 text-xs md:text-sm font-medium">© 2024 Rzeszow Party Planner. All rights reserved.</p>
<div class="flex items-center gap-6">
<a class="text-slate-400 dark:text-white/40 text-xs md:text-sm hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="text-slate-400 dark:text-white/40 text-xs md:text-sm hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="text-slate-400 dark:text-white/40 text-xs md:text-sm hover:text-primary transition-colors" href="#">Contact Support</a>
</div>
</div>
</footer>
</body></html>

<!-- Without Sign In - Forum -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Rzeszow Party Planner - Forum Access</title>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Theme Configuration -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f425af",
                        "background-light": "#f8f5f7",
                        "background-dark": "#181116", // Adjusted to match the bg color in the provided component
                        "surface-dark": "#22101c",
                        "border-dark": "#392833",
                    },
                    fontFamily: {
                        "display": ["Spline Sans", "Noto Sans", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "1rem",
                        "lg": "2rem",
                        "xl": "3rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-white overflow-x-hidden">
<div class="relative flex min-h-screen w-full flex-col group/design-root">
<!-- TopNavBar -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-dark bg-background-dark/95 backdrop-blur-md px-10 py-3">
<div class="flex items-center gap-4 text-white">
<div class="size-8 text-primary">
<span class="material-symbols-outlined text-3xl">celebration</span>
</div>
<h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Rzeszow Party Planner</h2>
</div>
<div class="flex flex-1 justify-end gap-8">
<div class="hidden md:flex items-center gap-9">
<a class="text-white/70 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Home</a>
<a class="text-white/70 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Events</a>
<!-- Active State for Forum -->
<a class="text-primary text-sm font-bold leading-normal relative after:content-[''] after:absolute after:-bottom-6 after:left-0 after:h-0.5 after:w-full after:bg-primary" href="#">Forum</a>
<a class="text-white/70 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Contact</a>
</div>
<div class="flex gap-2">
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span class="truncate">Register</span>
</button>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-border-dark hover:bg-white/10 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span class="truncate">Login</span>
</button>
</div>
</div>
</header>
<!-- Main Content Area with Restricted Access -->
<main class="flex-1 flex flex-col items-center justify-start relative w-full px-4 sm:px-10 py-10">
<div class="layout-content-container flex flex-col max-w-[960px] w-full flex-1 relative rounded-3xl overflow-hidden border border-border-dark bg-surface-dark/30 shadow-2xl">
<!-- Background: Fake Forum Content (Blurred) -->
<div class="absolute inset-0 z-0 flex flex-col gap-0 select-none pointer-events-none opacity-40">
<!-- Fake Header -->
<div class="flex items-center justify-between px-8 py-6 border-b border-border-dark/50 bg-background-dark">
<div class="h-6 w-32 bg-border-dark rounded animate-pulse"></div>
<div class="h-8 w-24 bg-primary/20 rounded-full"></div>
</div>
<!-- Fake Rows -->
<div class="flex flex-col">
<!-- Row 1 -->
<div class="flex items-start gap-4 p-6 border-b border-border-dark/30 bg-background-dark/50">
<div class="size-12 rounded-full bg-border-dark shrink-0"></div>
<div class="flex flex-col gap-2 w-full">
<div class="h-5 w-3/4 bg-border-dark rounded"></div>
<div class="h-3 w-1/2 bg-border-dark/50 rounded"></div>
<div class="flex gap-2 mt-2">
<div class="h-6 w-16 bg-primary/10 rounded-full"></div>
<div class="h-6 w-16 bg-white/5 rounded-full"></div>
</div>
</div>
</div>
<!-- Row 2 -->
<div class="flex items-start gap-4 p-6 border-b border-border-dark/30 bg-background-dark/50">
<div class="size-12 rounded-full bg-border-dark shrink-0"></div>
<div class="flex flex-col gap-2 w-full">
<div class="h-5 w-2/3 bg-border-dark rounded"></div>
<div class="h-3 w-1/3 bg-border-dark/50 rounded"></div>
</div>
</div>
<!-- Row 3 -->
<div class="flex items-start gap-4 p-6 border-b border-border-dark/30 bg-background-dark/50">
<div class="size-12 rounded-full bg-border-dark shrink-0"></div>
<div class="flex flex-col gap-2 w-full">
<div class="h-5 w-4/5 bg-border-dark rounded"></div>
<div class="h-3 w-1/2 bg-border-dark/50 rounded"></div>
</div>
</div>
<!-- Row 4 -->
<div class="flex items-start gap-4 p-6 border-b border-border-dark/30 bg-background-dark/50">
<div class="size-12 rounded-full bg-border-dark shrink-0"></div>
<div class="flex flex-col gap-2 w-full">
<div class="h-5 w-1/2 bg-border-dark rounded"></div>
</div>
</div>
</div>
</div>
<!-- Overlay Gradient -->
<div class="absolute inset-0 z-10 bg-gradient-to-b from-background-dark/60 via-background-dark/90 to-background-dark backdrop-blur-sm"></div>
<!-- Content: "Gate" Card -->
<div class="relative z-20 flex flex-col items-center justify-center flex-1 py-20 px-4 text-center">
<!-- Icon Container with Glow -->
<div class="relative mb-8 group">
<div class="absolute inset-0 bg-primary/40 blur-2xl rounded-full transform scale-150 group-hover:scale-175 transition-transform duration-700"></div>
<div class="relative flex items-center justify-center size-24 rounded-full bg-gradient-to-br from-surface-dark to-background-dark border border-border-dark shadow-xl">
<span class="material-symbols-outlined text-5xl text-primary">lock</span>
</div>
<div class="absolute -right-2 -top-2 size-10 rounded-full bg-surface-dark border border-border-dark flex items-center justify-center">
<span class="material-symbols-outlined text-xl text-white/50">forum</span>
</div>
</div>
<!-- Headings -->
<h1 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Unlock the Community
                    </h1>
<p class="text-white/70 text-base md:text-lg max-w-[520px] mb-10 leading-relaxed">
                        The Rzeszow Party Planner forum is where the real planning happens. 
                        <span class="text-white font-medium">Connect with local organizers</span>, discuss upcoming events, and find exclusive party tips.
                    </p>
<!-- Main CTA -->
<div class="flex flex-col items-center gap-6 w-full max-w-sm">
<button class="w-full h-12 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-base tracking-wide transition-all transform hover:scale-105 shadow-lg shadow-primary/25">
<span class="material-symbols-outlined text-[20px]">login</span>
                            Sign In to View Forum
                        </button>
<div class="flex items-center gap-4 w-full">
<div class="h-[1px] flex-1 bg-border-dark"></div>
<span class="text-xs font-semibold text-white/30 uppercase tracking-widest">or</span>
<div class="h-[1px] flex-1 bg-border-dark"></div>
</div>
<a class="text-primary hover:text-primary/80 text-sm font-medium underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-all" href="#">
                            New to Rzeszow Party? Create an Account
                        </a>
</div>
</div>
</div>
<!-- Meta Section (Below Card) -->
<div class="mt-8 text-center">
<p class="text-[#ba9cb0] text-sm font-normal">
<span class="material-symbols-outlined align-middle text-base mr-1">info</span>
                    Registered members get access to over 500+ local event threads.
                 </p>
</div>
</main>
<!-- Footer -->
<footer class="flex flex-col gap-6 px-10 py-10 text-center border-t border-border-dark bg-surface-dark/20 mt-auto">
<div class="flex flex-wrap items-center justify-center gap-6 text-[#ba9cb0]">
<a class="text-sm hover:text-white transition-colors min-w-40" href="#">Privacy Policy</a>
<a class="text-sm hover:text-white transition-colors min-w-40" href="#">Terms of Service</a>
</div>
<div class="flex flex-wrap justify-center gap-6">
<a class="group" href="#">
<div class="size-10 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-primary/20 transition-colors">
<span class="material-symbols-outlined text-[#ba9cb0] group-hover:text-primary transition-colors">public</span> <!-- Using generic public icon for social/web -->
</div>
</a>
<a class="group" href="#">
<div class="size-10 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-primary/20 transition-colors">
<span class="material-symbols-outlined text-[#ba9cb0] group-hover:text-primary transition-colors">share</span> <!-- Using share icon -->
</div>
</a>
<a class="group" href="#">
<div class="size-10 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-primary/20 transition-colors">
<span class="material-symbols-outlined text-[#ba9cb0] group-hover:text-primary transition-colors">groups</span> <!-- Using groups icon -->
</div>
</a>
</div>
<p class="text-[#ba9cb0]/60 text-xs font-normal leading-normal">© 2024 Rzeszow Party Planner. All rights reserved.</p>
</footer>
</div>
</body></html>

<!-- Sign In - Forum -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Forum - Rzeszow Party Planner</title>
<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#f425af",
              "background-light": "#f8f5f7",
              "background-dark": "#22101c",
            },
            fontFamily: {
              "display": ["Spline Sans", "sans-serif"]
            },
            borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        .card-hover:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 25px -5px rgba(244, 37, 175, 0.15), 0 8px 10px -6px rgba(244, 37, 175, 0.1);
        }
        .card-hover {
            transition: all 0.3s ease;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden">
<!-- Top Navigation -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-slate-200 dark:border-b-[#392833] px-6 py-4 md:px-10 z-20 bg-background-light dark:bg-background-dark sticky top-0">
<div class="flex items-center gap-4">
<div class="size-8 text-primary">
<span class="material-symbols-outlined text-[32px]">celebration</span>
</div>
<h2 class="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">Rzeszow Party Planner</h2>
</div>
<div class="flex flex-1 justify-end gap-4 md:gap-8 items-center">
<nav class="hidden md:flex items-center gap-9">
<a class="text-slate-600 dark:text-slate-200 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Home</a>
<a class="text-slate-600 dark:text-slate-200 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Events</a>
<a class="text-primary font-bold text-sm leading-normal" href="#">Forum</a>
</nav>
<div class="flex items-center gap-4">
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/20">
<span class="truncate">Log out</span>
</button>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" data-alt="User profile avatar image" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcyfOlzt4-jPwbkoXKRfRNYxqkM3XJ62bU4Ode8yFU8uY74AVMKRSmHbKmjYct-hY4w43I-U6CerzCeuDDCFmX7dLjG3ILenb20YbYxbw0zrSIBjDoI5l6Zv4lgqfXT3I0WOH73b940JaLWRGGjGXe6tQD5L4is37DPN8owVNT8MYcAbdRSJvP7Bbvt9Q1HZL0-KejocKn-6MCpFRoTytv-a9zHATGKsNAG6R_7t0rnjM4dZUKasTUEjTbw5nYQxId3Mrl2faN3MM");'></div>
</div>
</div>
</header>
<main class="flex-1 flex flex-col layout-container">
<!-- Hero Section -->
<div class="px-4 md:px-10 lg:px-40 py-10 flex flex-col items-center justify-center relative">
<!-- Abstract background blobs -->
<div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div class="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
<div class="layout-content-container flex flex-col max-w-[960px] w-full gap-8">
<div class="text-center space-y-4">
<h1 class="text-slate-900 dark:text-white tracking-tight text-3xl md:text-5xl font-bold leading-tight">
                        Join the conversation in Rzeszow
                    </h1>
<p class="text-slate-500 dark:text-slate-400 text-lg font-normal max-w-2xl mx-auto">
                        Find discussions about parties, venues, upcoming events, and more.
                    </p>
</div>
<!-- Search and Action Bar -->
<div class="flex flex-col md:flex-row gap-4 w-full">
<label class="flex flex-col flex-1 h-14">
<div class="flex w-full items-stretch rounded-full h-full bg-white dark:bg-[#392833] shadow-sm border border-slate-200 dark:border-none">
<div class="pl-4 flex items-center justify-center text-slate-400">
<span class="material-symbols-outlined">search</span>
</div>
<input class="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-slate-400 px-4 text-base font-normal" placeholder="Search discussions..." value=""/>
</div>
</label>
<button class="flex shrink-0 h-14 px-8 cursor-pointer items-center justify-center rounded-full bg-primary text-white gap-2 text-base font-bold tracking-[0.015em] hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/30">
<span class="material-symbols-outlined">add</span>
<span class="truncate">Start New Topic</span>
</button>
</div>
<!-- Chips Filter -->
<div class="flex gap-3 py-2 flex-wrap justify-center">
<button class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-6 shadow-md shadow-pink-500/20 transition-transform active:scale-95">
<p class="text-sm font-bold">All Topics</p>
</button>
<button class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-[#392833] hover:bg-slate-300 dark:hover:bg-[#4d3644] px-6 text-slate-700 dark:text-slate-200 transition-colors">
<p class="text-sm font-medium">Weekend Plans</p>
</button>
<button class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-[#392833] hover:bg-slate-300 dark:hover:bg-[#4d3644] px-6 text-slate-700 dark:text-slate-200 transition-colors">
<p class="text-sm font-medium">Venue Reviews</p>
</button>
<button class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-[#392833] hover:bg-slate-300 dark:hover:bg-[#4d3644] px-6 text-slate-700 dark:text-slate-200 transition-colors">
<p class="text-sm font-medium">Looking for Group</p>
</button>
<button class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-[#392833] hover:bg-slate-300 dark:hover:bg-[#4d3644] px-6 text-slate-700 dark:text-slate-200 transition-colors">
<p class="text-sm font-medium">Music &amp; DJs</p>
</button>
</div>
</div>
</div>
<!-- Forum Grid -->
<div class="px-4 md:px-10 lg:px-40 pb-20 flex justify-center">
<div class="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Card 1 -->
<article class="card-hover bg-white dark:bg-[#2d1b27] rounded-[2rem] p-6 flex flex-col gap-4 border border-slate-100 dark:border-none shadow-sm cursor-pointer group">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-cover bg-center" data-alt="User avatar 1" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCj-uBfQDdu4ZaeAiqy6HLISpxBFj_bCQ8aB1TirT68ODafCiJAKEnMuka3YWf5FzZawTXnRoCKvXnr7gklgrwhkwQNXr0pORkCii4lsrZypq-37vo7pyyOri3QyKQU6O-zhfOwfejzh_svEFm-gMd68tBYUs2f5Jo2L-07eiC5Vgb-VWLUrOGGCKFIDbAWGt3rpQfjasCXunX8tAaVfFZ31b73g8AZUlieheZxfV-obRZZUBhNNsBlB1R0Iirnvq9PRJ-_uEmufSQ");'></div>
<div class="flex flex-col">
<span class="text-sm font-bold text-slate-900 dark:text-white">Jakub Kowalski</span>
<span class="text-xs text-slate-500">2 hours ago</span>
</div>
<div class="ml-auto p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400">
<span class="material-symbols-outlined text-[20px]">more_horiz</span>
</div>
</div>
<div>
<div class="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold mb-3">
                            #Nightlife
                        </div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Best DJ for a rooftop party?</h3>
<p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                            Hey everyone! I'm planning a small rooftop gathering next weekend near the market square. Looking for recommendations for a DJ who plays deep house and chill vibes.
                        </p>
</div>
<div class="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
<div class="flex gap-4">
<button class="flex items-center gap-1.5 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors group/btn">
<span class="material-symbols-outlined text-[20px] group-hover/btn:fill-1">favorite</span>
<span class="text-sm font-medium">12</span>
</button>
<button class="flex items-center gap-1.5 text-slate-500 hover:text-blue-400 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
<span class="material-symbols-outlined text-[20px]">chat_bubble</span>
<span class="text-sm font-medium">4</span>
</button>
</div>
<button class="text-primary text-sm font-bold hover:underline">Read more</button>
</div>
</article>
<!-- Card 2 -->
<article class="card-hover bg-white dark:bg-[#2d1b27] rounded-[2rem] p-6 flex flex-col gap-4 border border-slate-100 dark:border-none shadow-sm cursor-pointer group">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-cover bg-center" data-alt="User avatar 2" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-Q5cQuQtboWBZo49M6-dghzvXx7z-cXNHU6cittIjdjANaTrikl27BcvytTFFijFFoh4QxldShVd-pxl1jycByGyOfWrKRB673vkI3lsH8IE-L6CjNMBBMBPzQZUbclu_pQNVIIIaSy7Ay_ZgGDJ7_n53O2f3qvskzEFWkD-LJTQya-3AWz6hAX4QmZrKURfWxqb113Nh9-Ga4Ng0LLgMRN-JnjngsGh_NClU3Itk1n544TOtyUl6HAdmIHVOs0y1gMLcn3wG2Sk");'></div>
<div class="flex flex-col">
<span class="text-sm font-bold text-slate-900 dark:text-white">Anna Nowak</span>
<span class="text-xs text-slate-500">5 hours ago</span>
</div>
<div class="ml-auto p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400">
<span class="material-symbols-outlined text-[20px]">more_horiz</span>
</div>
</div>
<div>
<div class="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-xs font-bold mb-3">
                            #Social
                        </div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Organizing a Pub Quiz at Lord Jack's</h3>
<p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                            Who wants to join my team for the trivia night this Thursday? We need 2 more people, ideally someone who knows 90s pop culture or geography!
                        </p>
</div>
<div class="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
<div class="flex gap-4">
<button class="flex items-center gap-1.5 text-primary transition-colors group/btn">
<span class="material-symbols-outlined text-[20px] fill-1">favorite</span>
<span class="text-sm font-medium">45</span>
</button>
<button class="flex items-center gap-1.5 text-slate-500 hover:text-blue-400 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
<span class="material-symbols-outlined text-[20px]">chat_bubble</span>
<span class="text-sm font-medium">20</span>
</button>
</div>
<button class="text-primary text-sm font-bold hover:underline">Read more</button>
</div>
</article>
<!-- Card 3 -->
<article class="card-hover bg-white dark:bg-[#2d1b27] rounded-[2rem] p-6 flex flex-col gap-4 border border-slate-100 dark:border-none shadow-sm cursor-pointer group">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-cover bg-center" data-alt="User avatar 3" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaDb4hEknA1m9ZHeOZwDj25AKWCifwgRA7kgEoJpK-4IkBwg1s5q0pPdt0oOjo1_7UfKIPcxoMzfYz0mZL2Y4GBpCqiPoHbwgFccVfZTlWollEXW8r2En7IEXpWGELehMuW1SQGlREaLeBW62htqLiefBR7TEqxrk8BNNT5iTWeF2feBA1C9m_FKntb8cvhZoyiGpP4pD3-Cl93KDOHIYofrpVxNoOKuH2VxvF27ONXf60RWEX9maW0irt4WmHwrchU41x_wha4Tc");'></div>
<div class="flex flex-col">
<span class="text-sm font-bold text-slate-900 dark:text-white">Mike Piotrowski</span>
<span class="text-xs text-slate-500">1 day ago</span>
</div>
<div class="ml-auto p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400">
<span class="material-symbols-outlined text-[20px]">more_horiz</span>
</div>
</div>
<div>
<div class="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 text-xs font-bold mb-3">
                            #Food
                        </div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Catering recommendations for 50 people</h3>
<p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                            Need good but affordable catering for a birthday bash. Preferably Polish cuisine but open to Italian. Any hidden gems in Rzeszow?
                        </p>
</div>
<div class="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
<div class="flex gap-4">
<button class="flex items-center gap-1.5 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors group/btn">
<span class="material-symbols-outlined text-[20px] group-hover/btn:fill-1">favorite</span>
<span class="text-sm font-medium">2</span>
</button>
<button class="flex items-center gap-1.5 text-slate-500 hover:text-blue-400 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
<span class="material-symbols-outlined text-[20px]">chat_bubble</span>
<span class="text-sm font-medium">0</span>
</button>
</div>
<button class="text-primary text-sm font-bold hover:underline">Read more</button>
</div>
</article>
<!-- Card 4 -->
<article class="card-hover bg-white dark:bg-[#2d1b27] rounded-[2rem] p-6 flex flex-col gap-4 border border-slate-100 dark:border-none shadow-sm cursor-pointer group">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-cover bg-center" data-alt="User avatar 4" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvc7LMiVKcaDGch-SxJfpA2daA4h8dsr4Pgjwn0vp9ckJvee5TeU2UVmaaJTjqi4TWxv2iniIitzJfj4x3PNz3h-g77APkPM73IF_RhZCCnbAc-QUgiRcoiqElOQ9t2Rmd0ppZWxPLkcXZnI4AXoxBLOs5nC7ekZw18krOlv_lyFEttlL1qAxNy9qIH1JPmAWyxgNcCcPBl7IgGufJBVYEtidP_eFJVEpMW-XymXM-Pli4lnJaVHrU0EaIhYHE5a_vmiK__6EeDdQ");'></div>
<div class="flex flex-col">
<span class="text-sm font-bold text-slate-900 dark:text-white">Kasia W.</span>
<span class="text-xs text-slate-500">2 days ago</span>
</div>
<div class="ml-auto p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400">
<span class="material-symbols-outlined text-[20px]">more_horiz</span>
</div>
</div>
<div>
<div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-bold mb-3">
                            #Events
                        </div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Cultural Festival Schedule</h3>
<p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                            Does anyone have the full lineup for the upcoming cultural festival at the castle? The website seems to be down.
                        </p>
</div>
<div class="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
<div class="flex gap-4">
<button class="flex items-center gap-1.5 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors group/btn">
<span class="material-symbols-outlined text-[20px] group-hover/btn:fill-1">favorite</span>
<span class="text-sm font-medium">89</span>
</button>
<button class="flex items-center gap-1.5 text-slate-500 hover:text-blue-400 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
<span class="material-symbols-outlined text-[20px]">chat_bubble</span>
<span class="text-sm font-medium">15</span>
</button>
</div>
<button class="text-primary text-sm font-bold hover:underline">Read more</button>
</div>
</article>
<!-- Card 5 (Featured/Image) -->
<article class="card-hover bg-white dark:bg-[#2d1b27] rounded-[2rem] p-0 flex flex-col border border-slate-100 dark:border-none shadow-sm cursor-pointer overflow-hidden group col-span-1 md:col-span-2 relative">
<div class="absolute top-4 left-4 z-10 flex gap-2">
<div class="inline-flex items-center px-3 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md text-slate-900 dark:text-white text-xs font-bold">
                            #VenueReview
                        </div>
<div class="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">
                            Featured
                        </div>
</div>
<div class="h-48 w-full bg-cover bg-center" data-alt="Interior of a modern club in Rzeszow" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCti0bbtQd--7whaLAKs25x354KCxC8AvSocFHrvLSlWDCTCSuBcsQ_OZWqhLpklNn0-JJkQnqL3o4WPZiNkG4EsBFM7Av6b3OsrQ_2C-H-Js92w3Oe4lW837co-DqkUWBYiajmOef16Xbu9gZ1TjFJN78LmnSATwaYotvz6LKmn4R7ax1JETi-vKsKOWyoHVcpHnICUYBlTYxLqad_FAe4DquOVgpeNu9cMuO2Zd15PlObi7ntK6uDHz2Qk-r9l7jV-nMJGScHnQ8");'></div>
<div class="p-6 flex flex-col gap-3">
<div class="flex items-center gap-3">
<div class="size-8 rounded-full bg-cover bg-center" data-alt="User avatar 5" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOijEb6gt_tc8HmdLkTmaTJCXjXEPNdUu1H0uLgXefNXR6qevo4ddLCtbegiHPlhWgDRB43pNlTzk_ehkNOc4tr9dU81-WTXeqMYkz2enJdZdt5coirNFCgP_iEvZ9cCXusNMOxJ3I6-vY7TwLcdSIR1jXYhqdNE9M2vR2cedIkut8004l_3iq-fXRWJwRHlWsPp7pBumDK-ex_r6EzHhaokK1iJPaxxrA7iDk7EcAkMzy2U4CmSUO-MyyF0N_jgQSVwtT6kDL28M");'></div>
<span class="text-sm font-bold text-slate-900 dark:text-white">Admin Team</span>
<span class="text-xs text-slate-500">• Pinned</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Review: The New Jazz Club on 3 Maja</h3>
<p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            We checked out the newly opened jazz spot last Friday. Incredible atmosphere, great cocktails, but you definitely need a reservation. Full review inside!
                        </p>
<div class="pt-2 flex items-center justify-between">
<div class="flex gap-4">
<button class="flex items-center gap-1.5 text-primary">
<span class="material-symbols-outlined text-[20px] fill-1">favorite</span>
<span class="text-sm font-medium">156</span>
</button>
<button class="flex items-center gap-1.5 text-slate-500 hover:text-blue-400 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
<span class="material-symbols-outlined text-[20px]">chat_bubble</span>
<span class="text-sm font-medium">42</span>
</button>
</div>
</div>
</div>
</article>
<!-- Card 6 -->
<article class="card-hover bg-white dark:bg-[#2d1b27] rounded-[2rem] p-6 flex flex-col gap-4 border border-slate-100 dark:border-none shadow-sm cursor-pointer group">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-cover bg-center" data-alt="User avatar 6" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWVhjV_BSEXgpc8RuhBE22i-sd9OjL5UE_741bvUPY5i0FmcSGHYH-DStrzI53FYN5mmHItp8_phwsH--Bs4UeHj9bLOEdWhVw-Lty7bnnulWI9IaxSNZDlxAwH7Uu0j3tkY168Hoa_iF0CZHccjqoie9nLVMdsTf--UszEiEdTbHZZ43txJBrPmP0lIhMiwMIuOOXScHHm6Cis4Vxpzg0owtY3zXDNVdFOjq8SY_s9J_o89Y2MhIpa8zJO9s__1OjRX_CecaPDW8");'></div>
<div class="flex flex-col">
<span class="text-sm font-bold text-slate-900 dark:text-white">Marta S.</span>
<span class="text-xs text-slate-500">3 days ago</span>
</div>
<div class="ml-auto p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400">
<span class="material-symbols-outlined text-[20px]">more_horiz</span>
</div>
</div>
<div>
<div class="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-xs font-bold mb-3">
                            #LFG
                        </div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Board Game Night Group</h3>
<p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                            Starting a bi-weekly board game group. First meeting at Cybermachina. All skill levels welcome!
                        </p>
</div>
<div class="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
<div class="flex gap-4">
<button class="flex items-center gap-1.5 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors group/btn">
<span class="material-symbols-outlined text-[20px] group-hover/btn:fill-1">favorite</span>
<span class="text-sm font-medium">18</span>
</button>
<button class="flex items-center gap-1.5 text-slate-500 hover:text-blue-400 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
<span class="material-symbols-outlined text-[20px]">chat_bubble</span>
<span class="text-sm font-medium">9</span>
</button>
</div>
<button class="text-primary text-sm font-bold hover:underline">Read more</button>
</div>
</article>
</div>
</div>
<!-- Floating Action Button for Mobile -->
<button class="md:hidden fixed bottom-6 right-6 size-14 rounded-full bg-primary text-white shadow-xl shadow-primary/40 flex items-center justify-center z-50">
<span class="material-symbols-outlined text-3xl">add</span>
</button>
</main>
</body></html>

<!-- Forum / Event Detail Page -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Event Detail - Rzeszow Party Planner</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f425af",
                        "background-light": "#f8f5f7",
                        "background-dark": "#22101c",
                        "card-dark": "#2f1b29", // Slightly lighter for cards
                        "card-hover": "#3a2233",
                    },
                    fontFamily: {
                        "display": ["Spline Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                    boxShadow: {
                        'neon': '0 0 10px rgba(244, 37, 175, 0.5), 0 0 20px rgba(244, 37, 175, 0.3)',
                    }
                },
            },
        }
    </script>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100 antialiased overflow-x-hidden min-h-screen flex flex-col">
<!-- Navigation -->
<header class="sticky top-0 z-50 w-full backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-gray-200 dark:border-white/10">
<div class="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1280px] mx-auto w-full">
<div class="flex items-center gap-4">
<div class="size-8 text-primary">
<span class="material-symbols-outlined !text-[32px]">celebration</span>
</div>
<h2 class="hidden sm:block text-lg font-bold leading-tight tracking-tight dark:text-white">Rzeszow Party Planner</h2>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium hover:text-primary transition-colors dark:text-white" href="#">Home</a>
<a class="text-sm font-medium text-primary transition-colors" href="#">Events</a>
<a class="text-sm font-medium hover:text-primary transition-colors dark:text-white" href="#">Forum</a>
</nav>
<div class="flex items-center gap-4">
<button class="flex items-center justify-center rounded-full size-10 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined dark:text-white">notifications</span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary" data-alt="User profile picture showing a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_GPjLX2DSHALSfDnahNIjiaCZ74BY7UGn7FXtbUHUWo6YbBEJDcNku3ye6nYfOs9Drjtce97W5FNr5yv7QClfqFjI5rva9qa7f5nrUrDEm-2dft4_IGvjt7SASd3GkZMzVynFpU52QwRp-gG_Puw0PctQQzuyqirlIBd1HkGmGa1tj2V6wrbA_fgeFKLurUFqWN4Q0xPqDeBimA-3mqTsmRwAwvyzz7989_t6yGUocGWlYG9UIOrO4DCnVpx_ElOYNrb7db9xB78");'></div>
</div>
</div>
</header>
<!-- Main Layout -->
<main class="flex-1 w-full max-w-[1280px] mx-auto p-4 md:px-10 md:py-8">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
<!-- Left Column: Content -->
<div class="lg:col-span-8 flex flex-col gap-8">
<!-- Hero Image -->
<div class="w-full relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group">
<div class="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10"></div>
<div class="w-full h-full bg-center bg-cover bg-no-repeat transform group-hover:scale-105 transition-transform duration-700" data-alt="Nightlife rooftop party scene with neon lights and crowd" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPWVuOT9QptJASVqcSNcLry_RHdEbNs6HIeA4s76Wnknoa9lLpd2KwYG0gMmQHaZRO7eLe2yd7d4VEY_gPaXxyXT2WFBJ4TMpZ_lXmazsy0X5j8LrakkmrN0o6zIs8qTNzgRDunWEItj9mdKRYcW1odjw0tB1PEK0816_zugW38i0hOoL_Adcbu8NjvjSxnpqWSEaGvii9p9kdCXBJ6yefb87hAOJ-XUhviWwilLMv2oNlfUL8dt0jhoG6K_QUrWtT54maLV6LBaE");'>
</div>
<div class="absolute top-4 left-4 z-20">
<span class="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-lg">Featured Event</span>
</div>
</div>
<!-- Title & Host Info -->
<div class="flex flex-col gap-2">
<h1 class="text-3xl md:text-5xl font-black leading-tight tracking-tight dark:text-white">
                        Neon Rooftop Mixer: <br/><span class="text-primary">Rzeszow Market Square</span>
</h1>
<div class="flex items-center gap-2 mt-2">
<div class="size-8 rounded-full bg-cover bg-center" data-alt="Host profile picture" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3mNH6vyQZW2eCIj-Z9EPoDt0bWV30nNpbvZmUJ_NB3nk3jV_mD_kKdE3r_zuM1V8JnCTfFzJk4PgSO-rPcOR67O7VB8j9aXcYT-PxTtzwGg8fQxLr9RmAtRmF_UY_EJyuKPi_E7AN_JnzUihu7kXQLykJvlm2gC9ikC374KAyIxfdKPuRdfHDR4vPrwByNPeLesvgVafkV_tvuKz2NvnSPF3QO_9l2wt7iZmAoWZPULQhBjIPlcPCM5jgAiDUqalcluJAHAH7YfA");'></div>
<p class="text-gray-600 dark:text-[#ba9cb0] text-sm font-medium">Hosted by <span class="text-gray-900 dark:text-white font-bold">Marek S.</span></p>
<span class="bg-green-500/20 text-green-600 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
<span class="material-symbols-outlined !text-[12px]">verified</span> Verified Host
                        </span>
</div>
</div>
<!-- Description -->
<div class="prose dark:prose-invert max-w-none">
<h3 class="text-xl font-bold mb-3 dark:text-white">About the event</h3>
<p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Join us for an unforgettable night overlooking the beautiful Rzeszow Rynek. We're taking over the top floor of the Grand Hotel for a night of craft cocktails, a live DJ set by local legend DJ Piorun, and a vibe you won't find anywhere else.
                    </p>
<p class="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                        This is a perfect opportunity to meet new people, network with local creatives, and enjoy the best view in the city. Dress to impress – the theme is "Neon Noir".
                    </p>
</div>
<!-- Gallery -->
<div class="flex flex-col gap-4">
<h3 class="text-xl font-bold dark:text-white">Vibe Check</h3>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3">
<div class="aspect-square rounded-lg bg-cover bg-center cursor-pointer hover:opacity-80 transition-opacity" data-alt="Crowd dancing at a party" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVtqSz321P4yoITn9iklrcyjnJygDHmxWRXhi23i64wCLVgMl4-qRYeFaw75eJSdom8RluED_8Epyql--ipTBi3AxuqBSKbb61m1hfEQdK65inA2eJ7IdMH7bhZB-7JE-9CPLij5v3Km3kQ7rV0TPQq8YQ1cCEDM_NHb8A6guttGKrOAptdbI63T_uDFFVXrGWkbEHtOqJCXYI9R_ydI3wmz_nx9j6-dWSQng2l2KAxXug6qht8Dmu5jNPueU8JjzZjOGT8YDnbjs");'></div>
<div class="aspect-square rounded-lg bg-cover bg-center cursor-pointer hover:opacity-80 transition-opacity" data-alt="Bartender mixing colorful cocktails" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlp062jDPbj4hO-JKXbvKGRCx87QzDeOSIlZ5G3HdnMSkTzMQE_w4bmEGI3tiHufIboWana04rgbfME-_kn_IF75KJlzuz2VpR4CsjnftkGH7b9AEW9kFj3uMkNgask9eUwDZsCTuGvohFBUzAJMUBYYDBkQq1iEKCmIyWboy8jP7kbsL68Nl1_NkSmKUUGIvcpItkmS602WYtimKx0iius1B9Q_Qo3VueraiqyMhCd0rt_Vnz5946LpTTwNHsUlz7EtAyZ50BhMg");'></div>
<div class="aspect-square rounded-lg bg-cover bg-center cursor-pointer hover:opacity-80 transition-opacity" data-alt="DJ console with lights" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWsBxgQPKGJMN6YvEONiMMpToQodpZuJIa5gpja9jTVzRRyaoTR3O7nL2IPwFIp2iUnM2zBeRvFUWiLHDoppPcjOJkj99mAAo-2wlJIZChJkb1B0fKuLdEYU9ZvpNw_Rhgqc0lKiO8QkWoVpbnhB042b1SlzXAQRDkEdB12c8KdpJ-QYwk7OkQ6vcOsDy4pv8h-cSBmK415sobvtq_L647KTstztCbQb4C7R56_XRgFGamSUEhLmycAUnYLGlQ7Wx0aGoZ9jdRI_o");'></div>
<div class="aspect-square rounded-lg bg-center flex items-center justify-center bg-gray-200 dark:bg-card-dark cursor-pointer hover:bg-gray-300 dark:hover:bg-card-hover transition-colors">
<span class="text-sm font-bold text-primary">+ 12 more</span>
</div>
</div>
</div>
<!-- Forum / Discussion Section -->
<div class="flex flex-col gap-6 pt-6 border-t border-gray-200 dark:border-white/10">
<div class="flex items-center justify-between">
<h3 class="text-xl font-bold dark:text-white">Discussion</h3>
<span class="text-xs font-medium px-2 py-1 bg-gray-200 dark:bg-white/10 rounded-full dark:text-white">24 Comments</span>
</div>
<!-- Comment Input -->
<div class="flex gap-4">
<div class="size-10 rounded-full bg-cover bg-center shrink-0" data-alt="Current logged in user avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSP6HRXQfK8R2VD3Oqrtn7CQKvIZiY1PgArURavAwTK6UHcvAUfkf87JhsrjFQqSaSM9B7bY7xqkLqsokLfiomQ_kL4D-oU50ak9DmeOHMH3K__c2BUuRN29y4tR6bdiGhUT_NU2wU_sKulAdVh-wel9R1ruM3vW3ILg8vgMHSBgs4aYRufScmwos1NuXX7TeELL3GWm6JpGUvy6D7KXKTWr3lnYFnXnV-aTcjusDvH3QNnYxhBSHZbyCYKXGSnotlHfuPFaRYlbc");'></div>
<div class="flex-1 relative">
<input class="w-full bg-white dark:bg-card-dark border-0 rounded-full px-5 py-3 text-sm focus:ring-2 focus:ring-primary dark:text-white placeholder-gray-500 shadow-sm" placeholder="Ask a question or join the hype..." type="text"/>
<button class="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
<span class="material-symbols-outlined !text-[18px]">send</span>
</button>
</div>
</div>
<!-- Comments List -->
<div class="space-y-6">
<!-- Comment 1 -->
<div class="flex gap-4 group">
<div class="size-10 rounded-full bg-cover bg-center shrink-0" data-alt="User avatar for Kasia" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfHwPRbNEFQTDLseRKipEgewT_HLLozQS9wzE2tFgrvbIo7UecWEz6Vqy3TSwjTesPQyafAHDy9Ole81Odkrm1TMHA6-27gZ-HY35VI64ik8rFy98azZtbSjXu1ox3cZ8VsxAbeHdOVQ74aHhpsTyIQ02E_-AXXzUWS0Y4lQF6v4jJfxjJulr1CnRcuj_ooIdVyc9VSbCd5xzLzCBJri9E_AxKiZF2HqFFyoTpaac_c_dRMp_3_2YhpvMGNgpmg5WT3WK2F9crz5o");'></div>
<div class="flex flex-col gap-1 max-w-[80%]">
<div class="flex items-baseline gap-2">
<span class="font-bold text-sm dark:text-white">Kasia W.</span>
<span class="text-xs text-gray-500">2h ago</span>
</div>
<div class="bg-gray-100 dark:bg-card-dark p-3 rounded-2xl rounded-tl-none text-sm dark:text-gray-200">
                                    Is there a specific dress code for "Neon Noir"?
                                </div>
<button class="text-xs text-gray-500 hover:text-primary w-fit font-medium flex items-center gap-1 mt-0.5">
<span class="material-symbols-outlined !text-[14px]">reply</span> Reply
                                </button>
</div>
</div>
<!-- Comment 2 (Host Reply) -->
<div class="flex gap-4 group pl-14">
<div class="size-8 rounded-full bg-cover bg-center shrink-0 ring-2 ring-primary" data-alt="Host avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiZfBgOiaR3g1PbZXw9sSU63J084Sc10aFiDiaO9qLLylj7XvKcdivIPP7PKyeZNYMSJzGX527-Fj7mnmdQf0gWiLaETNPHNwSsLeg3UwzMKFEzX9T1WhsabN8UAdG6uHrAdWNtmNHJZcP1cpk52us57viAqMQgM-HNgD7WFnhwKrqfxqS_orPJOfYbZP3MGlumWTgFE-27f46T0jTMyA79KOK8s4OeOT-K9ipZ1wY9iODqeFR4DfNHmA5J96JuPPNT47Cg0QNmVY");'></div>
<div class="flex flex-col gap-1 max-w-[80%]">
<div class="flex items-baseline gap-2">
<span class="font-bold text-sm dark:text-white">Marek S.</span>
<span class="text-[10px] font-bold bg-primary text-white px-1.5 py-0.5 rounded-full">HOST</span>
<span class="text-xs text-gray-500">1h ago</span>
</div>
<div class="bg-primary/10 border border-primary/20 p-3 rounded-2xl rounded-tl-none text-sm dark:text-primary text-primary font-medium">
                                    Hey Kasia! Think dark colors with bright accents. Black suit/dress with neon jewelry or accessories works perfectly! 🕶️✨
                                </div>
</div>
</div>
</div>
</div>
</div>
<!-- Right Column: Sidebar -->
<div class="lg:col-span-4 relative">
<div class="sticky top-24 flex flex-col gap-6">
<!-- Action Card -->
<div class="bg-white dark:bg-card-dark rounded-xl p-5 shadow-xl border border-gray-100 dark:border-white/5 flex flex-col gap-5">
<div class="flex justify-between items-start">
<div>
<p class="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Date &amp; Time</p>
<p class="text-lg font-bold dark:text-white flex items-center gap-2 mt-1">
<span class="material-symbols-outlined text-primary">calendar_month</span>
                                    Fri, Oct 24th
                                </p>
<p class="text-sm font-medium dark:text-gray-300 pl-8">20:00 - 02:00</p>
</div>
<div class="text-right">
<p class="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Price</p>
<p class="text-lg font-bold text-green-500 mt-1">20 PLN</p>
</div>
</div>
<hr class="border-gray-200 dark:border-white/10"/>
<div class="flex flex-col gap-2">
<p class="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Location</p>
<p class="font-bold text-sm dark:text-white flex items-start gap-2">
<span class="material-symbols-outlined text-primary shrink-0">location_on</span>
<span>Grand Hotel Boutique, <br/><span class="font-normal text-gray-400">3-go Maja 15, Rzeszow</span></span>
</p>
<!-- Mini Map Preview -->
<div class="w-full h-32 rounded-lg bg-cover bg-center mt-2 relative overflow-hidden group cursor-pointer" data-alt="Map preview of Rzeszow city center location" data-location="Rzeszow, Poland" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCticL7vQ3ePGIDBdaNbFvQNmmH8KTyTmyB361uqWrjcASPBIwbTlj0Wcp3FWPsABA82pIzRIy3vQd93HM2bFMFU031l9xqolQ6_jAeqbq3B1meJQOkkAxy_TuUjhYezeS11hnBQ73YswdgVxhXDCXi9tQPbAYnQke1ZNDYe5VYlNsT83IAArfKponZfMe6hTw74w7cqC7XFfW47wgLaVoI3ZE5VdXBAXqE5CuwoygyvS91AGdvmJRjT47o4If2DQxG41vnCrD49qM");'>
<div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<span class="bg-white text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">Open Map</span>
</div>
</div>
</div>
<div class="flex flex-col gap-3 mt-2">
<button class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-full shadow-neon transition-all transform active:scale-95 flex items-center justify-center gap-2">
<span class="material-symbols-outlined">check_circle</span>
                                I'm Going
                            </button>
<button class="w-full bg-transparent border-2 border-gray-300 dark:border-white/20 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-white hover:text-primary font-bold py-3 rounded-full transition-colors flex items-center justify-center gap-2">
<span class="material-symbols-outlined">star</span>
                                Maybe
                            </button>
</div>
</div>
<!-- Attendees Card -->
<div class="bg-white dark:bg-card-dark rounded-xl p-5 shadow-lg border border-gray-100 dark:border-white/5">
<div class="flex justify-between items-center mb-4">
<h4 class="font-bold dark:text-white text-sm uppercase tracking-wide">Who's Going</h4>
<span class="text-primary font-bold text-sm">42 People</span>
</div>
<div class="flex flex-wrap gap-2">
<!-- Avatar Pile -->
<div class="flex -space-x-3 overflow-hidden p-1">
<img alt="User avatar" class="inline-block size-10 rounded-full ring-2 ring-white dark:ring-card-dark object-cover" data-alt="Attendee avatar female" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8X9b7YhAfSRTUSavDXMCmyDG9NYGMAy0CbHd1evj2sJBfo-K_lwkNg-uR9DtD1QzArzWeo8CPyCVR_XS9rklNRX92ozOHQUUPqP2zLUXJSBE6kVcRTZQOWbXDPm-GEr8v18e65CC_h_o64xx7dlfpZ51rSkylXLGUOcFwCfIAqxFizfV9ONxQTeZ0y3KYhSjH7YEXBUtmrr8Ul0bKKYpAiJen2rUWyQNg25zLXmzvSMi-EKxCqcZmX9wGq4Ded3RpJX_MmjIL0XU"/>
<img alt="User avatar" class="inline-block size-10 rounded-full ring-2 ring-white dark:ring-card-dark object-cover" data-alt="Attendee avatar male" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaGEZWyDeYg_dLGLc6ubSncpvnXhcuRkseG3P567sxmo2JsOvnV-zjh1AH3f6QnUnIgc0de2xHdWy1Lu85CtlT3PtpcEt-QIpwXkAJ56XHxlsRi6JsxSufDaeirbMioz_ne3oLUCxuQe-HNOMZD8YkPZZgxGgbpFFVHlpIrdgV-D79ECsucndcTo1kgk1lRxSFeTQ3xrTluEGEc6co1WSlkwPnlrVYjSPC_HKad7MUat-tpNvvfNfAQAEokaoz6ZFvrlAWzt7waB0"/>
<img alt="User avatar" class="inline-block size-10 rounded-full ring-2 ring-white dark:ring-card-dark object-cover" data-alt="Attendee avatar male smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX1iN_4qY2TRf1qSoUW4nKTqqFgiJCcFxPwIRtRj9RXVn_9AqlAF7rAs6cy28WjPuGzZeygvXetAyeOsLRtMPR3Das7tYR8THVJ-WuPEZ5yJev4lYIsfrfm2413QNnylsLryauhbfgyiajQXutOeRIFFf0_u75hmqCXCkQcWnNvQG-uDNU6Bjmz75AGum_fY0vhKQpWJUwcW-xa7hVldiyFmLJlWijwOv3e28B5gNBKDRMWgxPOUVO3m5i-X9ZXcHGoZXq5B6AMFA"/>
<img alt="User avatar" class="inline-block size-10 rounded-full ring-2 ring-white dark:ring-card-dark object-cover" data-alt="Attendee avatar female profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiRUfpddnGRcC7LQdUo4Cg26jPPx7N88QAhCQtDHvx-alRPFAvXu_1tiKt41Lag9-HDmJNcKtp5fyob9CkhgflrbGup-VvKiU7wBBcz8bmfXxBDGiyko1SSRxSq6I5hlS5BN2WX-FFX3hDXuf0Xqlw3PjUv_j6EwP2aC9M8LtiFxx2nAhWbrpcPb9nC180FW-ZuOKqFklnTOZzVmSJagpwQUsMVCtaB90qfrpSgD_q6H4suWxhPTkdD1nIdvYbV4W8wSIFFQ5pp_M"/>
<div class="inline-flex items-center justify-center size-10 rounded-full ring-2 ring-white dark:ring-card-dark bg-gray-200 dark:bg-gray-700 text-xs font-bold text-gray-600 dark:text-white">
                                    +38
                                </div>
</div>
</div>
<div class="mt-4 pt-4 border-t border-gray-200 dark:border-white/10 text-center">
<a class="text-xs font-bold text-primary hover:text-primary/80 uppercase tracking-widest" href="#">View Guest List</a>
</div>
</div>
</div>
</div>
</div>
</main>
</body></html>

<!-- Profile Page -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Profile Page - Rzeszow Party Planner</title>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700;900&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f425af",
                        "background-light": "#f8f5f7",
                        "background-dark": "#22101c",
                        "card-dark": "#2f1d28",
                        "input-dark": "#392330",
                        "border-dark": "#543b4c",
                        "text-secondary": "#ba9cb0"
                    },
                    fontFamily: {
                        "display": ["Spline Sans", "sans-serif"],
                        "body": ["Noto Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #22101c; 
        }
        ::-webkit-scrollbar-thumb {
            background: #543b4c; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #f425af; 
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden antialiased selection:bg-primary selection:text-white">
<!-- Navigation -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-border-dark bg-background-dark/95 backdrop-blur-md px-6 lg:px-10 py-3">
<div class="flex items-center gap-4 text-white">
<div class="size-10 flex items-center justify-center rounded-full bg-primary/20 text-primary">
<span class="material-symbols-outlined text-2xl">celebration</span>
</div>
<h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Rzeszow Party Planner</h2>
</div>
<div class="flex flex-1 justify-end gap-8">
<nav class="hidden md:flex items-center gap-9">
<a class="text-text-secondary hover:text-white transition-colors text-sm font-medium leading-normal" href="#">Home</a>
<a class="text-text-secondary hover:text-white transition-colors text-sm font-medium leading-normal" href="#">Events</a>
<a class="text-text-secondary hover:text-white transition-colors text-sm font-medium leading-normal" href="#">Forum</a>
<a class="text-white text-sm font-bold leading-normal relative after:content-[''] after:absolute after:-bottom-5 after:left-0 after:w-full after:h-0.5 after:bg-primary" href="#">Profile</a>
</nav>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-[0_0_15px_rgba(244,37,175,0.4)]">
<span class="truncate">Log Out</span>
</button>
</div>
</header>
<main class="layout-container flex h-full grow flex-col py-8 px-4 md:px-10 lg:px-40">
<!-- Page Heading -->
<div class="layout-content-container flex flex-col max-w-[1200px] w-full mx-auto mb-8">
<div class="flex flex-wrap justify-between gap-3 px-4">
<div class="flex min-w-72 flex-col gap-2">
<h1 class="text-white text-4xl font-black leading-tight tracking-[-0.033em]">My Profile</h1>
<p class="text-text-secondary text-base font-normal leading-normal">Manage your account settings and preferences</p>
</div>
</div>
</div>
<!-- Main Grid Layout -->
<div class="layout-content-container max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 px-4">
<!-- Left Column: Profile Card & Settings (Span 8) -->
<div class="lg:col-span-8 flex flex-col gap-6">
<!-- Profile Header Card -->
<div class="bg-card-dark rounded-xl p-6 border border-border-dark/50 shadow-lg relative overflow-hidden group">
<div class="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-primary/20 to-purple-600/20"></div>
<div class="relative flex flex-col md:flex-row items-center md:items-end gap-6 pt-8">
<div class="relative">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 border-4 border-background-dark shadow-2xl" data-alt="Profile picture of Alex Kowalski" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzcheadF5Zxm7z8tl3NkQGYTng9kfmnsIJYl67YP0A7cQ0ifbyWDFOYq5dakDGLNllpp_SyFeseW6eOl35Fb_9_TFJ3sGEtoLYv72OjjWEZMpHuIjT-JqVzpRSBCs_dny7zfi5gpQ-yuyPeIkWfnvbK7SYtCYkydUdHPja9fchaPlqPn16W1765owvDUaRDsUXwqaa7hTYOcQAtohFe4PTFL-_6KlBUGH_kbS6YnTg0yB9_9HgFdHeDK8vmCDd-5LqNHrsNaxO2Z0");'>
</div>
<button class="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full hover:bg-white hover:text-primary transition-colors shadow-lg border-4 border-background-dark">
<span class="material-symbols-outlined text-sm font-bold">photo_camera</span>
</button>
</div>
<div class="flex flex-col items-center md:items-start flex-1 mb-2">
<h2 class="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Alex Kowalski</h2>
<p class="text-text-secondary text-sm font-medium">@alex_party_pl</p>
<div class="flex gap-2 mt-3">
<span class="px-3 py-1 rounded-full bg-white/5 text-xs text-text-secondary border border-border-dark">Member since 2023</span>
<span class="px-3 py-1 rounded-full bg-primary/10 text-xs text-primary border border-primary/20">Party Enthusiast</span>
</div>
</div>
</div>
</div>
<!-- Settings Form Card -->
<div class="bg-card-dark rounded-xl p-6 border border-border-dark/50 shadow-lg">
<div class="flex items-center gap-2 mb-6 border-b border-border-dark pb-4">
<span class="material-symbols-outlined text-primary">person</span>
<h3 class="text-xl font-bold text-white">Personal Information</h3>
</div>
<div class="flex flex-col gap-6">
<!-- Row 1 -->
<div class="flex flex-col md:flex-row gap-6">
<label class="flex flex-col flex-1 gap-2">
<span class="text-text-secondary text-sm font-medium">Display Name</span>
<div class="relative">
<input class="w-full bg-input-dark border border-border-dark rounded-xl h-12 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-secondary/50" type="text" value="Alex Kowalski"/>
</div>
</label>
<label class="flex flex-col md:w-1/3 gap-2">
<span class="text-text-secondary text-sm font-medium">Age</span>
<input class="w-full bg-input-dark border border-border-dark rounded-xl h-12 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-secondary/50" type="number" value="26"/>
</label>
</div>
<!-- Row 2 -->
<div class="flex flex-col md:flex-row gap-6">
<label class="flex flex-col flex-1 gap-2">
<span class="text-text-secondary text-sm font-medium">Gender</span>
<div class="relative">
<select class="w-full bg-input-dark border border-border-dark rounded-xl h-12 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer">
<option selected="" value="male">Male</option>
<option value="female">Female</option>
<option value="non-binary">Non-binary</option>
<option value="prefer-not-say">Prefer not to say</option>
</select>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">expand_more</span>
</div>
</label>
<label class="flex flex-col flex-1 gap-2">
<span class="text-text-secondary text-sm font-medium">Location</span>
<input class="w-full bg-input-dark border border-border-dark rounded-xl h-12 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-secondary/50" type="text" value="Rzeszów, Poland"/>
</label>
</div>
</div>
<div class="flex items-center gap-2 mb-6 mt-10 border-b border-border-dark pb-4">
<span class="material-symbols-outlined text-primary">lock</span>
<h3 class="text-xl font-bold text-white">Security</h3>
</div>
<div class="flex flex-col gap-6">
<label class="flex flex-col gap-2">
<span class="text-text-secondary text-sm font-medium">Current Password</span>
<input class="w-full bg-input-dark border border-border-dark rounded-xl h-12 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" type="password" value="********"/>
</label>
<div class="flex flex-col md:flex-row gap-6">
<label class="flex flex-col flex-1 gap-2">
<span class="text-text-secondary text-sm font-medium">New Password</span>
<input class="w-full bg-input-dark border border-border-dark rounded-xl h-12 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-secondary/50" placeholder="Min 8 characters" type="password"/>
</label>
<label class="flex flex-col flex-1 gap-2">
<span class="text-text-secondary text-sm font-medium">Confirm New Password</span>
<input class="w-full bg-input-dark border border-border-dark rounded-xl h-12 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-secondary/50" placeholder="Repeat new password" type="password"/>
</label>
</div>
</div>
<div class="mt-10 flex gap-4 pt-4 border-t border-border-dark/50">
<button class="flex-1 md:flex-none h-12 px-8 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-transform active:scale-95 shadow-lg shadow-primary/20">
                            Save Changes
                        </button>
<button class="flex-1 md:flex-none h-12 px-8 rounded-full bg-transparent border border-border-dark text-text-secondary font-bold text-sm hover:text-white hover:border-white transition-colors">
                            Cancel
                        </button>
</div>
</div>
</div>
<!-- Right Column: Results & Stats (Span 4) -->
<div class="lg:col-span-4 flex flex-col gap-6">
<!-- Results Card -->
<div class="bg-card-dark rounded-xl p-6 border border-border-dark/50 shadow-lg h-full max-h-[600px] flex flex-col">
<div class="flex items-center justify-between mb-6">
<h3 class="text-xl font-bold text-white">My Results</h3>
<span class="material-symbols-outlined text-primary text-2xl">bar_chart</span>
</div>
<div class="grid grid-cols-2 gap-4 mb-8">
<div class="bg-background-dark p-4 rounded-2xl border border-border-dark flex flex-col items-center justify-center text-center gap-1 hover:border-primary/50 transition-colors group">
<span class="text-3xl font-black text-white group-hover:text-primary transition-colors">12</span>
<span class="text-xs text-text-secondary font-medium uppercase tracking-wider">Parties Hosted</span>
</div>
<div class="bg-background-dark p-4 rounded-2xl border border-border-dark flex flex-col items-center justify-center text-center gap-1 hover:border-primary/50 transition-colors group">
<span class="text-3xl font-black text-white group-hover:text-primary transition-colors">48</span>
<span class="text-xs text-text-secondary font-medium uppercase tracking-wider">Attended</span>
</div>
<div class="bg-background-dark p-4 rounded-2xl border border-border-dark flex flex-col items-center justify-center text-center gap-1 col-span-2 hover:border-primary/50 transition-colors group">
<div class="flex items-center gap-1">
<span class="text-3xl font-black text-white group-hover:text-primary transition-colors">4.9</span>
<span class="material-symbols-outlined text-yellow-400 text-xl filled">star</span>
</div>
<span class="text-xs text-text-secondary font-medium uppercase tracking-wider">Host Reputation</span>
</div>
</div>
<h4 class="text-sm font-bold text-white mb-4 uppercase tracking-wider opacity-80">Upcoming Activity</h4>
<div class="flex flex-col gap-3 overflow-y-auto pr-2">
<!-- Activity Item 1 -->
<div class="flex items-center gap-4 p-3 rounded-xl bg-background-dark/50 hover:bg-background-dark transition-colors border border-transparent hover:border-border-dark group cursor-pointer">
<div class="size-12 rounded-lg bg-cover bg-center shrink-0" data-alt="Abstract neon pattern for rooftop party" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuABHRvejxS2FMWymYaNwnOgQfgKR-CGiz0fscABRe3wx_eMh3MB1-U2zmj69uX1Ij-WBeCsCBMN-72Tj0BY2sx4fe48Q3fFM1FuMK3aJu9w8Gj-_rMDXz9ZsqFzF7Hq80F1ZLPWP8d6dGa8av5-6_orIJ96rf7vZg7uKHaZ65crIql1ab0i4hd4ORhfupIKRQiwnS-Ka0QTbB03_TA7vYGhuedU_s4H6_I3CjUjAXLq-L1qP8D4sE9Od5Nsn8JmzlCK7o2pvPosHSA')"></div>
<div class="flex flex-col min-w-0">
<span class="text-white font-bold text-sm truncate group-hover:text-primary transition-colors">Neon Rooftop Mixer</span>
<span class="text-text-secondary text-xs">Tomorrow, 20:00 • Host</span>
</div>
</div>
<!-- Activity Item 2 -->
<div class="flex items-center gap-4 p-3 rounded-xl bg-background-dark/50 hover:bg-background-dark transition-colors border border-transparent hover:border-border-dark group cursor-pointer">
<div class="size-12 rounded-lg bg-cover bg-center shrink-0" data-alt="Blurry lights of a night club" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqWlLckiFMHGd5jak9mM15Fq8FMwuyBPxtHsSsxc_BbyQxBgsGEVikUuOmzGjF1ZuYaYnLGZDr5wlvdF2xfNfD5tP5pHBTmhIITZViNeddiBPDNXnRi2msj8J35R6Ozhpl3wkp-FnzPbH9tUOCLUZzoClyYL7Uosjtfhyk-jjLUJMLVfyACMJoY_K955q9kciAtaWTl4YdHgmITHk8dQ9XjTrmwaD5nYbtmNYJUNjLYmruGHb6ehAqiLPP1yHS3MTlMOSXnPvU_pI')"></div>
<div class="flex flex-col min-w-0">
<span class="text-white font-bold text-sm truncate group-hover:text-primary transition-colors">Underground Techno</span>
<span class="text-text-secondary text-xs">Sat, 22:00 • Going</span>
</div>
</div>
<!-- Activity Item 3 -->
<div class="flex items-center gap-4 p-3 rounded-xl bg-background-dark/50 hover:bg-background-dark transition-colors border border-transparent hover:border-border-dark group cursor-pointer">
<div class="size-12 rounded-lg bg-cover bg-center shrink-0" data-alt="People laughing at a dinner table" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSwCLVfCMXm5uadmd2UKo7DULhNqaJxs86kyFOLWRnQNMuasYr-kI_TAbLa3TBnlDFXO_zCmT67WXfDkxo3otLnRlbjAwc6UIDIiTiz0I08kNLTHU-7J5e_Nb1cPhzw1B9gAfQ_a_Whnb66fAHi4XmTpyl19NrKwyNf8-WMvga5uoDxwNp5s68j0I1CkPeju6CdFFmSeKlW2rdSBfQJdKPyZq3Ens8rn34W0XyAEmyEKMl4JrYM5f8pJxvNG6ZiNMbU-u0ZgE3t2Q')"></div>
<div class="flex flex-col min-w-0">
<span class="text-white font-bold text-sm truncate group-hover:text-primary transition-colors">Board Games Night</span>
<span class="text-text-secondary text-xs">Sun, 18:00 • Going</span>
</div>
</div>
</div>
<div class="mt-auto pt-6">
<button class="w-full py-3 rounded-xl border border-dashed border-border-dark text-text-secondary hover:text-white hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2 text-sm font-medium">
<span class="material-symbols-outlined text-lg">add_circle</span>
                            Create New Event
                        </button>
</div>
</div>
</div>
</div>
</main>
</body></html>

<!-- Calendar Page -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Calendar - Rzeszow Party Planner</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f425af",
                        "background-light": "#f8f5f7",
                        "background-dark": "#22101c",
                        "surface-dark": "#2d1b26", 
                        "surface-border": "#392833",
                        "text-muted": "#ba9cb0"
                    },
                    fontFamily: {
                        "display": ["Spline Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        body { font-family: 'Spline Sans', sans-serif; }
        /* Custom scrollbar for webkit */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #22101c; }
        ::-webkit-scrollbar-thumb { background: #392833; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #f425af; }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-white">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 w-full border-b border-surface-border bg-background-dark/95 backdrop-blur-md">
<div class="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
<!-- Logo Section -->
<div class="flex items-center gap-3">
<div class="text-primary p-1 bg-white/5 rounded-lg">
<span class="material-symbols-outlined text-[24px]">celebration</span>
</div>
<h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">Rzeszow Party Planner</h2>
</div>
<!-- Desktop Links -->
<div class="hidden md:flex items-center gap-8">
<a class="text-white hover:text-primary transition-colors text-sm font-medium" href="#">Home</a>
<a class="text-primary text-sm font-bold" href="#">Events</a>
<a class="text-white hover:text-primary transition-colors text-sm font-medium" href="#">Forum</a>
</div>
<!-- Profile Actions -->
<div class="flex items-center gap-4">
<div class="flex items-center gap-3 pl-4 border-l border-surface-border">
<img alt="User Profile" class="w-8 h-8 rounded-full border border-surface-border" data-alt="User avatar thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfyZdO76t7Xi03Jv37odXArYXocN-E1C4M5WFHtz4HnJO8cedeAffE8vTAk6AfYsSDM9gT8MLdSXvvNanPP4bYrGkTGOg80UueszANrRG7laS8OJiSOpBjyqYzrBvPxzmwpGmwBq4NZ21VJNKJjHcM5VRnNkIxrYqa-sAMZrZju2mVu4Lrr-CSYiwKTMNODg7MkpPv7mGERlsK3rl-wmFO1xNs_Cetyrc1yD-DU5XAOy85DXp6KI5L50JkoFnwKvVNpB3_V6L3hqg"/>
<a class="text-white hover:text-primary transition-colors text-sm font-medium hidden lg:block" href="#">Profile</a>
</div>
<button class="flex items-center justify-center rounded-full h-9 px-4 bg-surface-border hover:bg-surface-border/80 text-white text-xs font-bold uppercase tracking-wider transition-all">
                    Logout
                </button>
</div>
</div>
</header>
<!-- Main Content Layout -->
<main class="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-6 py-8 flex flex-col lg:flex-row gap-8">
<!-- LEFT COLUMN: Calendar & Header -->
<section class="flex flex-col flex-1 gap-6 min-w-0">
<!-- Page Heading & Month Navigation -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
<div class="flex flex-col gap-2">
<h1 class="text-4xl font-black tracking-tight text-white">Calendar</h1>
<p class="text-text-muted font-normal">Manage your social life in Rzeszow</p>
</div>
<div class="flex items-center gap-4 bg-surface-dark border border-surface-border p-1.5 rounded-full self-start md:self-auto">
<button class="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors group">
<span class="material-symbols-outlined group-hover:-translate-x-0.5 transition-transform text-[20px]">chevron_left</span>
</button>
<span class="font-bold text-lg px-4 text-white min-w-[140px] text-center">October 2023</span>
<button class="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors group">
<span class="material-symbols-outlined group-hover:translate-x-0.5 transition-transform text-[20px]">chevron_right</span>
</button>
</div>
</div>
<!-- Calendar Grid Container -->
<div class="bg-surface-dark border border-surface-border rounded-2xl p-4 md:p-8 flex-1 shadow-xl shadow-black/20">
<!-- Weekday Headers -->
<div class="grid grid-cols-7 mb-4">
<div class="text-text-muted text-xs font-bold uppercase tracking-widest text-center py-2">Mon</div>
<div class="text-text-muted text-xs font-bold uppercase tracking-widest text-center py-2">Tue</div>
<div class="text-text-muted text-xs font-bold uppercase tracking-widest text-center py-2">Wed</div>
<div class="text-text-muted text-xs font-bold uppercase tracking-widest text-center py-2">Thu</div>
<div class="text-text-muted text-xs font-bold uppercase tracking-widest text-center py-2">Fri</div>
<div class="text-text-muted text-xs font-bold uppercase tracking-widest text-center py-2 text-primary">Sat</div>
<div class="text-text-muted text-xs font-bold uppercase tracking-widest text-center py-2 text-primary">Sun</div>
</div>
<!-- Days Grid -->
<div class="grid grid-cols-7 auto-rows-fr gap-2 md:gap-4 aspect-[4/3] md:aspect-auto h-auto md:h-[600px]">
<!-- Empty slots for previous month -->
<div class="p-2"></div>
<div class="p-2"></div>
<div class="p-2"></div>
<div class="p-2"></div>
<div class="p-2"></div>
<div class="p-2"></div>
<!-- Day 1 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">1</span>
</button>
<!-- Day 2 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">2</span>
</button>
<!-- Day 3 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">3</span>
</button>
<!-- Day 4 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">4</span>
<div class="mt-1 size-1.5 rounded-full bg-primary/40"></div>
</button>
<!-- Day 5 (Has Event) -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-white">5</span>
<div class="mt-1 flex gap-1">
<div class="size-1.5 rounded-full bg-primary shadow-[0_0_8px_#f425af]"></div>
</div>
</button>
<!-- Day 6 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">6</span>
</button>
<!-- Day 7 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">7</span>
</button>
<!-- Day 8 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">8</span>
</button>
<!-- Day 9 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">9</span>
</button>
<!-- Day 10 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">10</span>
</button>
<!-- Day 11 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">11</span>
</button>
<!-- Day 12 (Has Event) -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-white">12</span>
<div class="mt-1 size-1.5 rounded-full bg-primary shadow-[0_0_8px_#f425af]"></div>
</button>
<!-- Day 13 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">13</span>
</button>
<!-- Day 14 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">14</span>
</button>
<!-- Day 15 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">15</span>
</button>
<!-- Day 16 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">16</span>
</button>
<!-- Day 17 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">17</span>
</button>
<!-- Day 18 (Has Events) -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-white">18</span>
<div class="mt-1 flex gap-1">
<div class="size-1.5 rounded-full bg-primary shadow-[0_0_8px_#f425af]"></div>
<div class="size-1.5 rounded-full bg-primary/50"></div>
</div>
</button>
<!-- Day 19 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">19</span>
</button>
<!-- Day 20 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">20</span>
</button>
<!-- Day 21 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">21</span>
</button>
<!-- Day 22 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">22</span>
</button>
<!-- Day 23 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">23</span>
</button>
<!-- Day 24 (SELECTED) -->
<button class="relative flex flex-col items-center justify-start py-2 rounded-xl bg-primary shadow-[0_0_20px_rgba(244,37,175,0.4)] ring-2 ring-primary ring-offset-2 ring-offset-background-dark transform scale-105 z-10">
<span class="text-sm md:text-lg font-bold text-white">24</span>
<div class="mt-1 flex gap-1">
<div class="size-1.5 rounded-full bg-white"></div>
<div class="size-1.5 rounded-full bg-white/70"></div>
<div class="size-1.5 rounded-full bg-white/40"></div>
</div>
</button>
<!-- Day 25 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">25</span>
</button>
<!-- Day 26 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">26</span>
</button>
<!-- Day 27 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">27</span>
</button>
<!-- Day 28 (Has Event) -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-white">28</span>
<div class="mt-1 size-1.5 rounded-full bg-primary shadow-[0_0_8px_#f425af]"></div>
</button>
<!-- Day 29 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">29</span>
</button>
<!-- Day 30 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">30</span>
</button>
<!-- Day 31 -->
<button class="relative group flex flex-col items-center justify-start py-2 rounded-xl hover:bg-white/5 transition-colors">
<span class="text-sm md:text-lg font-medium text-text-muted group-hover:text-white">31</span>
<div class="mt-1 size-1.5 rounded-full bg-primary/40"></div>
</button>
<!-- Empty slots next month -->
<div class="p-2 opacity-30 text-text-muted text-sm flex justify-center pt-3">1</div>
<div class="p-2 opacity-30 text-text-muted text-sm flex justify-center pt-3">2</div>
<div class="p-2 opacity-30 text-text-muted text-sm flex justify-center pt-3">3</div>
<div class="p-2 opacity-30 text-text-muted text-sm flex justify-center pt-3">4</div>
</div>
</div>
</section>
<!-- RIGHT COLUMN: Selected Day Sidebar -->
<aside class="w-full lg:w-[420px] flex flex-col gap-6 shrink-0">
<!-- Sidebar Header -->
<div class="flex items-center justify-between pt-2">
<h2 class="text-xl font-bold text-white leading-tight">Events for Oct 24th</h2>
<span class="text-sm font-medium text-text-muted bg-surface-dark px-3 py-1 rounded-full border border-surface-border">3 Events</span>
</div>
<!-- Events List -->
<div class="flex flex-col gap-4">
<!-- Event Card 1 -->
<div class="group relative flex flex-col rounded-2xl bg-surface-dark border border-surface-border overflow-hidden hover:border-primary/50 transition-colors">
<div class="h-32 w-full bg-cover bg-center" data-alt="Crowd at a tech meetup in a dimly lit venue" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsgeViGfHuwGzQfUxJ7yro6dCHPzZSkKN15HPY8KqA1YOM7C_flmTaYLRtDM4iNEjDsEsqMI13fHZQRzeoY24p_QnI9936YtXyZ08H_JyJ3RHeBfLatUoULETjnvqUxtiLfy6JrYQgXg2UvzLNy9KsrksHoTsBeT0CbQNFdJgAei2jB6bMG1XoeOQh80giAIdzqut-Nhe0VkK1MSUy-XlfbuAe_fP3BbnXulJbs2B3y6lSu6BYxhJNzyp9GRh6dnL2MV1mfYuFFZA');">
<div class="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-white flex items-center gap-1 border border-white/10">
<span class="material-symbols-outlined text-[14px] text-primary">group</span> 42 going
                        </div>
</div>
<div class="p-5 flex flex-col gap-3">
<div class="flex justify-between items-start">
<div class="flex flex-col">
<h3 class="text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">Rzeszow Tech Meetup</h3>
<div class="flex items-center gap-1 text-text-muted text-sm mt-1">
<span class="material-symbols-outlined text-[16px]">schedule</span> 18:00
                                    <span class="mx-1">•</span>
<span class="material-symbols-outlined text-[16px]">location_on</span> Lord Jack's Pub
                                </div>
</div>
</div>
<div class="flex items-center justify-between pt-2 mt-1 border-t border-white/5">
<div class="flex -space-x-2">
<img alt="Participant" class="w-7 h-7 rounded-full border-2 border-surface-dark" data-alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu7X5Ql-Npbvji-h1TjHLBf1zfnxrH4REaoHb7oVio8IZNYfB8Q7coev8jRNX6j-7Y1-ouLi3G4-nIAHQDR2vcvC1ara9_P2BU86GRILfQmas22n8iY1coWBszuglX5Hgs7i5jU-w6A68YthsQLxnxljfqEIDh7Lj76zP4EbPVsaNGowEI0OwZnlgKalLmWHMxHHDJkJVIyk0dLSH0IjLeR3pBLhFrSxnCgPvi33s45S4ps1buJ97G__bpVTDQmNOLIuYWPIvRgc8"/>
<img alt="Participant" class="w-7 h-7 rounded-full border-2 border-surface-dark" data-alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7WjGEG_dxTKKfjix3g2ZI54pSrfxoEFRxcULRoBHb-rGCHGmh4vnjQuatWCjNw9Cl1OQfMneB21nu8rDUYxBUG99ScMjFUsfcWr-9yJY6YSLmUaq4cQMH9ehHsrI3BMEiJgaJEP2HaySQ0H_CGOQsxaEXVBtQ2su5vFs6SwM8mKpa8TbqootfE5WlVVkvfo4PdDZ6qOHWhMyaOAO1vTnWo3YBhBpxiC3f8EAix_AO5BUJXKWjiqZ45Ap-fwsxIoEiSHXP8FDtE4U"/>
<img alt="Participant" class="w-7 h-7 rounded-full border-2 border-surface-dark" data-alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx436B3zyqBn4HyDnh7JWbD0fOwPGP81BWTbMOxZNxE8XtGsk3UE8TBOlzAflh9203t7olIN3zMV8yP6pDngZQ-hpznSauJKCpWiZN6gKQMiJXuvh4zYiG7JpMK1uDJ-dwm4ZeQ9ysQsesGaEpHN4bDqZr1Or7peJxpQ0UB4T93F3hfzTGs2jI0X3KLR0tqBM4-ETEC6sZ85RwFluYvw3kgqWUo1CfWMFkJ66rdHojKYDC14f_8lxcCuHXcoIiJTvCETZOvpysSwo"/>
<div class="w-7 h-7 rounded-full border-2 border-surface-dark bg-surface-border flex items-center justify-center text-[10px] text-white font-bold">+39</div>
</div>
<button class="bg-surface-border hover:bg-primary text-white text-xs font-bold py-2 px-4 rounded-full transition-colors">
                                Details
                            </button>
</div>
</div>
</div>
<!-- Event Card 2 -->
<div class="group relative flex flex-col rounded-2xl bg-surface-dark border border-surface-border overflow-hidden hover:border-primary/50 transition-colors">
<div class="h-32 w-full bg-cover bg-center" data-alt="People singing karaoke in a neon lit bar" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6WulYmCEo6V1Q0FG_blhpg5MgkyyiX6UAU36KiJq2hVcVIaMX-Sdi-RVa2J5kU_hhog-3VEXocStWUdFWD5RaySPLRjtintHdY0EKZ6iCYOs8cc9C8CGlfjwDMfEVIE-hHVy_QB_QsOqoYpq-amjDRSHiCwyiIKnZiOT0fZanXwMGSMXCiZzSoJmu4ULzeeHoIWXwCsNCkR79dEkcDyRpBf9X1_XmVFUIk9jlWVWRiyItdFzteVSPMcEVint5CVv_mOYVZSPxH9g');">
<div class="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-white flex items-center gap-1 border border-white/10">
<span class="material-symbols-outlined text-[14px] text-primary">music_note</span> 15 going
                        </div>
</div>
<div class="p-5 flex flex-col gap-3">
<div class="flex justify-between items-start">
<div class="flex flex-col">
<h3 class="text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">Erasmus Karaoke Night</h3>
<div class="flex items-center gap-1 text-text-muted text-sm mt-1">
<span class="material-symbols-outlined text-[16px]">schedule</span> 21:00
                                    <span class="mx-1">•</span>
<span class="material-symbols-outlined text-[16px]">location_on</span> Pewex
                                </div>
</div>
</div>
<div class="flex items-center justify-between pt-2 mt-1 border-t border-white/5">
<div class="flex -space-x-2">
<img alt="Participant" class="w-7 h-7 rounded-full border-2 border-surface-dark" data-alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6puvDGJLs38tbUkso0cJQDQ2lJE_7eRhpZR8mC96WokwJQ3ZF-Cl8Y2B1kMO40o4LTGpMPSvLxwOLYxTPHhifIpq7Bj1lYEDzK0eCu3wwyP3RFSbJOm4EevKJbAUmf8J7Hci05JI29TXUAhv7JJrf_9JbwEKm82W4hufbV2nTqRVNAYmKE2-cQ2mFYlw98ylQ6FOZJ2CUxk84Hz3NfVXPo8f1-tyDK5h7z0b7l3WWxD8RFJStuBWyKvq834Ynx_-7kye0KcMDxYQ"/>
<img alt="Participant" class="w-7 h-7 rounded-full border-2 border-surface-dark" data-alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzGoTlcXbxsQRHU69ft55qIfBASWDLr-uqQcxubkKfAAwNHVbcrchbsRyVD9inlJSjxCdgttA7FBZbg-TP6Q7XFaQ7DDQCFarVh1MsCD3JSTzMvR96BNoKIwS0Tdw4VGauG2seWuqIAWiIhzef3iCw92BkfznwpdCCUpTDQvf4lX-yxqwgX3LUNeQ8VGf5Cb0nshWaV6UZAgHZ6i2gdVNTMUU-YtdlGNgFK65jqTkolZcB21PGDc9BXjClLYFfxWqcX7BG9Z_FeGw"/>
<div class="w-7 h-7 rounded-full border-2 border-surface-dark bg-surface-border flex items-center justify-center text-[10px] text-white font-bold">+12</div>
</div>
<button class="bg-surface-border hover:bg-primary text-white text-xs font-bold py-2 px-4 rounded-full transition-colors">
                                Details
                            </button>
</div>
</div>
</div>
<!-- Event Card 3 -->
<div class="group relative flex flex-col rounded-2xl bg-surface-dark border border-surface-border overflow-hidden hover:border-primary/50 transition-colors opacity-75 hover:opacity-100">
<div class="flex gap-4 p-4 items-center">
<div class="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0" data-alt="Slice of pizza on a wooden table at night" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDT3HFQ7BVzCfcdQqCqCDybBoyuS8rx5rQAT93LqfN3WXYX9fZ74KNBQEwWj7nzIYRZgHqLfVgQOulqcrNs0oWwm_KdSH2DR1B17NBPm1FE6yq6ivUiYn-ffff_pNOYM7wFby8yNNeFFfP_C84CgNeWkzu5bOHM1NmlQxcwj6Jsa1pGGAJavCruao9CI42I8gK0k9tonpTjEDXj_cc-suscJSjO-uxyS9AcRtdtNeqPd8mO4COHyE_jGJ6dNiEaOTvlVQjAcMnjIho');"></div>
<div class="flex flex-col flex-1">
<h3 class="text-white text-base font-bold leading-tight group-hover:text-primary transition-colors">Late Night Pizza</h3>
<div class="flex items-center gap-1 text-text-muted text-xs mt-1 mb-2">
<span class="material-symbols-outlined text-[14px]">schedule</span> 00:30
                                <span class="mx-1">•</span>
<span class="material-symbols-outlined text-[14px]">location_on</span> Rynek
                            </div>
<button class="text-left text-xs text-primary font-bold hover:underline w-fit">
                                View Discussion
                            </button>
</div>
</div>
</div>
</div>
</aside>
</main>
<!-- Floating Action Button -->
<button aria-label="Add Event" class="fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary text-white rounded-full shadow-[0_0_20px_rgba(244,37,175,0.5)] flex items-center justify-center hover:scale-110 hover:rotate-90 transition-all duration-300 group">
<span class="material-symbols-outlined text-3xl group-hover:text-white">add</span>
</button>
</body></html>