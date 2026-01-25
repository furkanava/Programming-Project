// Universal Navbar Component for Rzeszow Event Planner
// This provides a consistent navigation experience across all pages

function createNavbar(currentPage = '') {
    return `
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        <div class="container-fluid px-4">
            <!-- Logo & Brand -->
            <a class="navbar-brand d-flex align-items-center" href="index.html">
                <span class="material-symbols-outlined me-2" style="font-size: 32px; color: var(--primary, #f425af);">celebration</span>
                <span class="fw-bold">Rzeszow Event Planner</span>
            </a>
            
            <!-- Mobile Toggle -->
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <!-- Nav Content -->
            <div class="collapse navbar-collapse" id="navbarContent">
                <!-- Main Navigation Links -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link ${currentPage === 'home' ? 'active' : ''}" href="index.html">
                            <span class="material-symbols-outlined align-middle" style="font-size: 20px;">home</span>
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${currentPage === 'events' ? 'active' : ''}" href="all-events.html">
                            <span class="material-symbols-outlined align-middle" style="font-size: 20px;">event</span>
                            All Events
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${currentPage === 'forum' ? 'active' : ''}" href="forum-access.html">
                            <span class="material-symbols-outlined align-middle" style="font-size: 20px;">forum</span>
                            Forum
                        </a>
                    </li>
                    
                    <!-- Auth-Only Links -->
                    <li class="nav-item auth-only d-none">
                        <a class="nav-link ${currentPage === 'dashboard' ? 'active' : ''}" href="dashboard.html">
                            <span class="material-symbols-outlined align-middle" style="font-size: 20px;">dashboard</span>
                            Dashboard
                        </a>
                    </li>
                    <li class="nav-item auth-only d-none">
                        <a class="nav-link ${currentPage === 'create' ? 'active' : ''}" href="create-event.html">
                            <span class="material-symbols-outlined align-middle" style="font-size: 20px;">add_circle</span>
                            Create Event
                        </a>
                    </li>
                </ul>
                
                <!-- Right Side Actions -->
                <div class="d-flex align-items-center gap-3">
                    <!-- Not Logged In -->
                    <div class="guest-only">
                        <a href="signin.html" class="btn btn-outline-light btn-sm rounded-pill px-3">
                            <span class="material-symbols-outlined align-middle" style="font-size: 18px;">login</span>
                            Sign In
                        </a>
                        <a href="register.html" class="btn btn-primary-custom btn-sm ms-2 rounded-pill px-3">
                            <span class="material-symbols-outlined align-middle" style="font-size: 18px;">person_add</span>
                            Sign Up
                        </a>
                    </div>
                    
                    <!-- Logged In -->
                    <div class="auth-only d-none">
                        <div class="dropdown">
                            <button class="btn btn-link text-white text-decoration-none dropdown-toggle d-flex align-items-center" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <img id="navUserAvatar" src="" alt="Avatar" class="rounded-circle me-2" style="width: 32px; height: 32px; object-fit: cover; display: none;">
                                <span class="material-symbols-outlined me-2" id="navUserAvatarIcon" style="font-size: 32px;">account_circle</span>
                                <span id="navUserName" class="fw-medium">User</span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown" style="background: var(--card-dark, #2f1d28); border: 1px solid rgba(255,255,255,0.1);">
                                <li>
                                    <a class="dropdown-item text-white ${currentPage === 'profile' ? 'active' : ''}" href="profile.html">
                                        <span class="material-symbols-outlined align-middle me-2" style="font-size: 20px;">person</span>
                                        My Profile
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item text-white ${currentPage === 'dashboard' ? 'active' : ''}" href="dashboard.html">
                                        <span class="material-symbols-outlined align-middle me-2" style="font-size: 20px;">dashboard</span>
                                        Dashboard
                                    </a>
                                </li>
                                <li><hr class="dropdown-divider" style="border-color: rgba(255,255,255,0.1);"></li>
                                <li>
                                    <button class="dropdown-item text-danger" onclick="handleNavbarLogout(); return false;" style="background: none; border: none; width: 100%; text-align: left; cursor: pointer;">
                                        <span class="material-symbols-outlined align-middle me-2" style="font-size: 20px;">logout</span>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    
    <style>
        .navbar {
            background-color: rgba(34, 16, 28, 0.95) !important;
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 0.75rem 0;
        }
        
        .navbar-brand {
            color: var(--primary, #f425af) !important;
            font-size: 1.25rem;
        }
        
        .nav-link {
            color: rgba(255, 255, 255, 0.7) !important;
            font-weight: 500;
            transition: all 0.3s;
            border-radius: 0.5rem;
            padding: 0.5rem 1rem !important;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .nav-link:hover {
            color: var(--primary, #f425af) !important;
            background: rgba(244, 37, 175, 0.1);
        }
        
        .nav-link.active {
            color: var(--primary, #f425af) !important;
            background: rgba(244, 37, 175, 0.15);
            font-weight: 600;
        }
        
        .btn-primary-custom {
            background-color: var(--primary, #f425af);
            border: none;
            border-radius: 50px;
            color: white;
            font-weight: 600;
            transition: all 0.3s;
            box-shadow: 0 0 15px rgba(244, 37, 175, 0.3);
        }
        
        .btn-primary-custom:hover {
            background-color: #d91d96;
            box-shadow: 0 0 25px rgba(244, 37, 175, 0.5);
            transform: scale(1.05);
        }
        
        .dropdown-menu {
            margin-top: 0.5rem;
        }
        
        .dropdown-item:hover {
            background: rgba(244, 37, 175, 0.1);
        }
        
        .dropdown-item.active {
            background: rgba(244, 37, 175, 0.2);
        }
    </style>
    `;
}

// Initialize navbar auth state
let navbarAuthRetries = 0;
const maxNavbarAuthRetries = 50; // 5 seconds max

function initNavbarAuth() {
    if (typeof window.firebaseAuth === 'undefined') {
        navbarAuthRetries++;
        if (navbarAuthRetries >= maxNavbarAuthRetries) {
            console.error('Firebase failed to initialize for navbar after 5 seconds');
            return;
        }
        setTimeout(initNavbarAuth, 100);
        return;
    }
    
    console.log('Firebase initialized, setting up navbar auth');
    
    window.firebaseAuth.onAuthStateChanged(user => {
        const guestElements = document.querySelectorAll('.guest-only');
        const authElements = document.querySelectorAll('.auth-only');
        
        if (user) {
            // User is logged in
            guestElements.forEach(el => el.classList.add('d-none'));
            authElements.forEach(el => el.classList.remove('d-none'));
            
            // Update user info
            const navUserName = document.getElementById('navUserName');
            const navUserAvatar = document.getElementById('navUserAvatar');
            const navUserAvatarIcon = document.getElementById('navUserAvatarIcon');
            
            if (navUserName) {
                navUserName.textContent = user.displayName || user.email?.split('@')[0] || 'Kullanıcı';
            }
            
            if (user.photoURL && navUserAvatar) {
                navUserAvatar.src = user.photoURL;
                navUserAvatar.style.display = 'block';
                if (navUserAvatarIcon) navUserAvatarIcon.style.display = 'none';
            } else if (navUserAvatarIcon) {
                navUserAvatarIcon.style.display = 'block';
                if (navUserAvatar) navUserAvatar.style.display = 'none';
            }
        } else {
            // User is not logged in
            guestElements.forEach(el => el.classList.remove('d-none'));
            authElements.forEach(el => el.classList.add('d-none'));
        }
    });
}

// Handle logout from navbar
async function handleNavbarLogout() {
    try {
        if (window.firebaseAuth) {
            await window.firebaseAuth.signOut();
            window.location.href = 'index.html';
        } else {
            console.error('Firebase auth not initialized');
            alert('Error: Authentication service not ready');
        }
    } catch (error) {
        console.error('Logout error:', error);
        alert('Error logging out: ' + error.message);
    }
}

// Export functions
window.createNavbar = createNavbar;
window.initNavbarAuth = initNavbarAuth;
window.handleNavbarLogout = handleNavbarLogout;

