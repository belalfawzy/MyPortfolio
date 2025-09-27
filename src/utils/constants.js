// Social media links
export const SOCIAL_LINKS = {
  github: 'https://github.com/belalfawzy',
  linkedin: 'https://www.linkedin.com/in/belalfawzy123/',
  email: 'mailto:belalfawzy123@gmail.com',
  codeforces: 'https://codeforces.com/profile/BELAL_FAWZY_',
  phone: 'tel:+201234567890'
}

// Resume links
export const RESUME_LINKS = {
  view: 'https://drive.google.com/file/d/10hdeg_deHvJycImHSoajhti2MGaeo0Lt/view',
  download: 'https://drive.google.com/uc?export=download&id=10hdeg_deHvJycImHSoajhti2MGaeo0Lt'
}

// Animation variants
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export const FADE_IN_LEFT = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
}

export const FADE_IN_RIGHT = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
}

export const SCALE_IN = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}

// Stagger animation for lists
export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}
