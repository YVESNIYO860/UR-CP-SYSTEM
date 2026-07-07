// ============================================
// UNIVERSITY HIERARCHY
// ============================================

export const campuses = [
  {
    campusId: 'campus-huye',
    name: 'Huye Campus',
    location: 'Huye District',
    province: 'Southern Province',
    established: 2013,
  },
  {
    campusId: 'campus-kigali',
    name: 'Kigali Campus',
    location: 'Kigali City',
    province: 'Kigali City',
    established: 2010,
  },
  {
    campusId: 'campus-butare',
    name: 'Butare Campus',
    location: 'Butare District',
    province: 'Southern Province',
    established: 2015,
  },
];

export const colleges = [
  {
    collegeId: 'cbe-001',
    campusId: 'campus-huye',
    code: 'CBE',
    name: 'College of Business and Economics',
    dean: 'Prof. Jean Rwigema',
    email: 'cbe@ur.ac.rw',
  },
  {
    collegeId: 'cass-001',
    campusId: 'campus-huye',
    code: 'CASS',
    name: 'College of Arts and Social Sciences',
    dean: 'Prof. Francine Mukakayumba',
    email: 'cass@ur.ac.rw',
  },
  {
    collegeId: 'cmhs-001',
    campusId: 'campus-huye',
    code: 'CMHS',
    name: 'College of Medicine and Health Sciences',
    dean: 'Dr. Theobald Nkengurutse',
    email: 'cmhs@ur.ac.rw',
  },
];

export const schools = [
  // CBE Schools
  {
    schoolId: 'school-sfb-001',
    collegeId: 'cbe-001',
    name: 'School of Finance and Banking',
    director: 'Dr. Claude Mwangi',
  },
  {
    schoolId: 'school-mkt-001',
    collegeId: 'cbe-001',
    name: 'School of Marketing and Management',
    director: 'Dr. Beatrice Uwase',
  },
  {
    schoolId: 'school-econ-001',
    collegeId: 'cbe-001',
    name: 'School of Economics and Statistics',
    director: 'Prof. Justine Kalisa',
  },
  // CASS Schools
  {
    schoolId: 'school-lang-001',
    collegeId: 'cass-001',
    name: 'School of Languages and Translation',
    director: 'Dr. Emmanuel Habimana',
  },
  {
    schoolId: 'school-history-001',
    collegeId: 'cass-001',
    name: 'School of History and Social Studies',
    director: 'Prof. Vestine Nyirahabimana',
  },
  {
    schoolId: 'school-comm-001',
    collegeId: 'cass-001',
    name: 'School of Communication and Media',
    director: 'Dr. Sylvain Rugeyo',
  },
  // CMHS Schools
  {
    schoolId: 'school-med-001',
    collegeId: 'cmhs-001',
    name: 'School of Medicine',
    director: 'Prof. Charles Nkurunziza',
  },
  {
    schoolId: 'school-nursing-001',
    collegeId: 'cmhs-001',
    name: 'School of Nursing and Midwifery',
    director: 'Dr. Jacqueline Iribagiza',
  },
  {
    schoolId: 'school-pubhealth-001',
    collegeId: 'cmhs-001',
    name: 'School of Public Health',
    director: 'Prof. Rosette Nyaruhirira',
  },
];

export const departments = [
  // CBE - School of Finance and Banking
  {
    deptId: 'dept-accounting-001',
    schoolId: 'school-sfb-001',
    name: 'Accounting',
    head: 'Dr. Jean Paul Rutahigwa',
    code: 'ACC',
  },
  {
    deptId: 'dept-finance-001',
    schoolId: 'school-sfb-001',
    name: 'Finance',
    head: 'Dr. Mathias Ngabo',
    code: 'FIN',
  },
  {
    deptId: 'dept-banking-001',
    schoolId: 'school-sfb-001',
    name: 'Banking and Financial Services',
    head: 'Prof. Christine Uwitonze',
    code: 'BANK',
  },
  // CBE - School of Marketing and Management
  {
    deptId: 'dept-marketing-001',
    schoolId: 'school-mkt-001',
    name: 'Marketing',
    head: 'Dr. Pierre Habimana',
    code: 'MKT',
  },
  {
    deptId: 'dept-management-001',
    schoolId: 'school-mkt-001',
    name: 'Business Management',
    head: 'Dr. Grace Niyitegeka',
    code: 'MGMT',
  },
  {
    deptId: 'dept-hrm-001',
    schoolId: 'school-mkt-001',
    name: 'Human Resource Management',
    head: 'Prof. Yvonne Mutesi',
    code: 'HRM',
  },
  // CBE - School of Economics
  {
    deptId: 'dept-econ-001',
    schoolId: 'school-econ-001',
    name: 'Economics',
    head: 'Dr. Emmanuel Munyabyenzi',
    code: 'ECON',
  },
  {
    deptId: 'dept-stats-001',
    schoolId: 'school-econ-001',
    name: 'Statistics',
    head: 'Prof. Erasmus Habyarimana',
    code: 'STAT',
  },
  // CASS - School of Languages
  {
    deptId: 'dept-english-001',
    schoolId: 'school-lang-001',
    name: 'English Language',
    head: 'Dr. Jean Baptiste Nzeyimana',
    code: 'ENG',
  },
  {
    deptId: 'dept-french-001',
    schoolId: 'school-lang-001',
    name: 'French Language',
    head: 'Prof. Adolphe Mukarwego',
    code: 'FRE',
  },
  {
    deptId: 'dept-translation-001',
    schoolId: 'school-lang-001',
    name: 'Translation and Interpreting',
    head: 'Dr. Laurence Rumanzi',
    code: 'TRANS',
  },
  // CASS - School of History
  {
    deptId: 'dept-history-001',
    schoolId: 'school-history-001',
    name: 'History',
    head: 'Prof. Yolande Mukagasana',
    code: 'HIST',
  },
  {
    deptId: 'dept-socio-001',
    schoolId: 'school-history-001',
    name: 'Sociology',
    head: 'Dr. Thérèse Nyiramongi',
    code: 'SOC',
  },
  // CASS - School of Communication
  {
    deptId: 'dept-journalism-001',
    schoolId: 'school-comm-001',
    name: 'Journalism and Media Studies',
    head: 'Dr. Maurice Sendashonga',
    code: 'JOUR',
  },
  {
    deptId: 'dept-pubcomm-001',
    schoolId: 'school-comm-001',
    name: 'Public Communication',
    head: 'Prof. Josephine Mbonimpa',
    code: 'PUBCOM',
  },
  // CMHS - School of Medicine
  {
    deptId: 'dept-medicine-001',
    schoolId: 'school-med-001',
    name: 'General Medicine',
    head: 'Prof. Faustin Nyundo',
    code: 'MED',
  },
  {
    deptId: 'dept-surgery-001',
    schoolId: 'school-med-001',
    name: 'Surgery',
    head: 'Dr. Domitille Tuyizere',
    code: 'SURG',
  },
  {
    deptId: 'dept-pediatrics-001',
    schoolId: 'school-med-001',
    name: 'Pediatrics',
    head: 'Prof. Pascal Nzaramba',
    code: 'PEDI',
  },
  // CMHS - School of Nursing
  {
    deptId: 'dept-nursing-001',
    schoolId: 'school-nursing-001',
    name: 'General Nursing',
    head: 'Dr. Epiphanie Nzikizabandi',
    code: 'NURS',
  },
  {
    deptId: 'dept-midwifery-001',
    schoolId: 'school-nursing-001',
    name: 'Midwifery',
    head: 'Prof. Olive Niyitegeka',
    code: 'MIDW',
  },
  // CMHS - School of Public Health
  {
    deptId: 'dept-pubhealth-001',
    schoolId: 'school-pubhealth-001',
    name: 'Public Health',
    head: 'Prof. Bertrand Muvunyi',
    code: 'PH',
  },
  {
    deptId: 'dept-envhealth-001',
    schoolId: 'school-pubhealth-001',
    name: 'Environmental Health',
    head: 'Dr. Ange Niyozirikandi',
    code: 'EH',
  },
];

export const groups = [
  // Accounting groups
  {
    groupId: 'group-acc-3a-001',
    deptId: 'dept-accounting-001',
    name: 'ACC 3A',
    year: 3,
    cp: 'Alice Mukamana',
    cpEmail: 'alice@ur.ac.rw',
  },
  {
    groupId: 'group-acc-3b-001',
    deptId: 'dept-accounting-001',
    name: 'ACC 3B',
    year: 3,
    cp: 'Jean Niyigena',
    cpEmail: 'jean@ur.ac.rw',
  },
  // Finance groups
  {
    groupId: 'group-fin-2a-001',
    deptId: 'dept-finance-001',
    name: 'FIN 2A',
    year: 2,
    cp: 'Marie Uwimana',
    cpEmail: 'marie@ur.ac.rw',
  },
];

// ============================================
// USER DATA
// ============================================

export const sampleUser = {
  uid: 'cp-001',
  name: 'Alice Mukamana',
  email: 'alice.mukamana@ur.ac.rw',
  role: 'cp',
  photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  phone: '+250 788 123 456',
  campusId: 'campus-huye',
  collegeId: 'cbe-001',
  schoolId: 'school-sfb-001',
  departmentId: 'dept-accounting-001',
  groupId: 'group-acc-3a-001',
  college: 'College of Business and Economics',
  school: 'School of Finance and Banking',
  department: 'Accounting',
  programme: 'BBA',
  academicYear: '2025/2026',
  class: 'BBA 3',
  yearOfStudy: 3,
  assignedRoomId: 'room-1',
};

export const sampleRoom = {
  roomId: 'room-1',
  campusId: 'campus-huye',
  building: 'Business Block',
  roomNumber: 'B201',
  capacity: 80,
  facilities: ['Projector', 'Whiteboard', 'Air Conditioning'],
  status: 'Available',
  assignedCP: 'cp-001',
  isAvailable: true,
};

export const sampleBookings = [
  {
    bookingId: 'b1',
    userId: 'cp-001',
    groupId: 'group-acc-3a-001',
    roomId: 'room-1',
    date: '2026-07-08',
    startTime: '09:00',
    endTime: '11:00',
    course: 'Financial Management',
    lecturer: 'Dr. Niyonzima',
    reason: 'Lecture session',
    status: 'Approved',
    createdAt: '2026-07-05',
  },
  {
    bookingId: 'b2',
    userId: 'cp-001',
    groupId: 'group-acc-3a-001',
    roomId: 'room-1',
    date: '2026-07-10',
    startTime: '13:00',
    endTime: '15:00',
    course: 'Business Strategy',
    lecturer: 'Prof. Uwase',
    reason: 'Guest lecture',
    status: 'Pending',
    createdAt: '2026-07-06',
  },
];

export const sampleNotifications = [
  {
    notificationId: 'n1',
    userId: 'cp-001',
    title: 'Booking Approved',
    message: 'Your upcoming session for B201 has been approved.',
    read: false,
    createdAt: '2026-07-06',
  },
  {
    notificationId: 'n2',
    userId: 'cp-001',
    title: 'Upcoming Class Reminder',
    message: 'Your session starts tomorrow at 09:00.',
    read: true,
    createdAt: '2026-07-05',
  },
];

export const sampleAdminUsers = [
  {
    uid: 'admin-001',
    name: 'Dr. Eric Nsanzimana',
    email: 'eric.nsanzimana@ur.ac.rw',
    role: 'admin',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    phone: '+250 788 654 321',
    campusId: 'campus-huye',
  },
];
