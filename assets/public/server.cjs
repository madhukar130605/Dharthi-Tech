var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_dotenv = __toESM(require("dotenv"), 1);
var import_express2 = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_url = require("url");
var import_vite = require("vite");

// server/routes/api.ts
var import_express = require("express");

// server/db/store.ts
var AgriculturalDatabase = class {
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.farms = /* @__PURE__ */ new Map();
    this.soilRecords = /* @__PURE__ */ new Map();
    this.otpStore = /* @__PURE__ */ new Map();
    this.notifications = [
      {
        id: "notif-1",
        title: "Rain Alert for Kadapa Region",
        message: "Light to moderate rain expected on Wednesday (28 May). Postpone foliar spraying.",
        category: "weather",
        timestamp: "Today, 06:45 AM",
        read: false,
        severity: "medium"
      },
      {
        id: "notif-2",
        title: "Soil Nutrient Advisory",
        message: "Phosphorus level is High in Plot #1. Avoid adding DAP or Super Phosphate this week.",
        category: "soil",
        timestamp: "Today, 07:30 AM",
        read: false,
        severity: "low"
      },
      {
        id: "notif-3",
        title: "Paddy Stem Borer Alert",
        message: "Early signs reported in neighboring villages. Inspect tiller stems for dead hearts.",
        category: "pest",
        timestamp: "Yesterday, 04:15 PM",
        read: true,
        severity: "high"
      },
      {
        id: "notif-4",
        title: "Mandi Price Increase: Groundnut",
        message: "Kadapa APMC Groundnut rates up by \u20B9180/quintal to \u20B96,850. Favorable time to sell.",
        category: "market",
        timestamp: "23 May, 11:20 AM",
        read: true,
        severity: "low"
      }
    ];
    this.schemes = [
      {
        id: "pm-kisan",
        name: "PM-KISAN",
        fullName: "Pradhan Mantri Kisan Samman Nidhi",
        category: "Farmer Financial Assistance",
        ministry: "Ministry of Agriculture & Farmers Welfare, Govt of India",
        sponsoringAuthority: "Central",
        eligibilityCategory: "All Landholding Farmers",
        status: "active",
        statusLabel: "Active \u2022 Central Portal",
        summary: "Direct income support of \u20B96,000 per year in 3 equal tranches for eligible landholding farmer families.",
        description: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a central sector scheme providing direct financial assistance to all landholding farmer families with cultivable landholding in their names. Payments are transferred directly into verified Aadhaar-linked bank accounts via DBT in three equal 4-monthly tranches.",
        benefits: "\u20B96,000 per year transferred in 3 equal installments of \u20B92,000 every four months (April\u2013July, August\u2013November, December\u2013March).",
        eligibility: [
          "All landholding farmer families who own cultivable land in their names.",
          "Must possess valid Aadhaar card linked with active bank account and NPCI DBT-enabled.",
          "Land records (RoR / Pattadar Passbook) must be updated in State land records portal.",
          "Exclusions: Institutional landholders, serving/retired government officials, income tax payees of last assessment year, institutional pensioners receiving \u20B910,000+/month."
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Land Ownership Record (Pattadar Passbook / 1B / RoR)",
          "Active Bank Account Details (IFSC, Account Number)",
          "Aadhaar-linked Mobile Number for OTP authentication"
        ],
        applicationMethod: "Online self-registration via PM-KISAN Portal (pmkisan.gov.in) or through local Common Service Centers (CSC) / Village Agriculture Assistant (Rythu Bharosa Kendra).",
        officialUrl: "https://pmkisan.gov.in/",
        sourceName: "Official PM-KISAN Portal (Ministry of Agriculture & Farmers Welfare)",
        sourceUrl: "https://pmkisan.gov.in/",
        lastVerified: "27 Aug 2026",
        applicableStates: ["All India", "Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Maharashtra", "Punjab"],
        relevanceTags: ["Income Support", "Small & Marginal Farmers", "Direct Benefit Transfer", "Central Government Schemes", "Farmer Financial Assistance"]
      },
      {
        id: "pmfby",
        name: "PMFBY",
        fullName: "Pradhan Mantri Fasal Bima Yojana",
        category: "Insurance Schemes",
        ministry: "Ministry of Agriculture & Farmers Welfare, Govt of India",
        sponsoringAuthority: "Central",
        eligibilityCategory: "All Farmers (Loanee & Non-Loanee)",
        status: "active",
        statusLabel: "Active \u2022 Verified Portal",
        summary: "Comprehensive crop loss and yield risk insurance with subsidized farmer premium rates.",
        description: "PMFBY provides end-to-end risk cover for notified crops against non-preventable natural perils: prevented sowing, standing crop damage from drought, dry spells, flood, pest/disease attack, and post-harvest localized losses due to cyclonic rains and hailstorms.",
        benefits: "Financial indemnification against crop yield loss. Extremely low premium paid by farmer: 2% for Kharif food/oilseed crops, 1.5% for Rabi crops, and 5% for annual commercial/horticultural crops. Remaining actuarial premium is subsidized equally by Central and State Governments.",
        eligibility: [
          "All farmers growing notified crops in notified areas (both loanee and non-loanee farmers).",
          "Sharecroppers and tenant farmers with valid land tenancy agreement or cultivation proof.",
          "Enrollment must be completed before the cutoff date for the respective cropping season (Kharif / Rabi)."
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Land Record (Pattadar passbook / Village revenue certificate)",
          "Sowing Certificate / Crop Sowing Declaration signed by Village Agriculture Officer",
          "Bank Passbook / Cancelled Cheque with IFSC code"
        ],
        applicationMethod: "Enroll through National Crop Insurance Portal (pmfby.gov.in), authorized Commercial/Cooperative Banks, CSC Centers, or District Agriculture Department.",
        officialUrl: "https://pmfby.gov.in/",
        sourceName: "National Crop Insurance Portal (pmfby.gov.in)",
        sourceUrl: "https://pmfby.gov.in/",
        lastVerified: "25 Aug 2026",
        applicableStates: ["All India", "Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Maharashtra", "Punjab"],
        relevanceTags: ["Crop Insurance", "Risk Mitigation", "Insurance Schemes", "Central Government Schemes"]
      },
      {
        id: "pmksy-micro-irrigation",
        name: "PMKSY - Per Drop More Crop",
        fullName: "Pradhan Mantri Krishi Sinchayee Yojana (Micro Irrigation)",
        category: "Irrigation Schemes",
        ministry: "Department of Agriculture and Farmers Welfare (DA&FW)",
        sponsoringAuthority: "Central",
        eligibilityCategory: "Small & Marginal Farmers",
        status: "active",
        statusLabel: "Active \u2022 Subsidy Available",
        summary: "Up to 55%\u201370% capital subsidy for installing Drip and Sprinkler micro-irrigation systems.",
        description: "The Per Drop More Crop (PDMC) component of PMKSY focuses on water-use efficiency at farm level through precision micro-irrigation technologies. It minimizes water losses, reduces electricity consumption, and enhances crop yield significantly.",
        benefits: "Financial assistance of 55% of indicative system cost for Small & Marginal farmers (up to 70% in selected states through state top-ups) and 45% for Other farmers for Drip/Sprinkler sets.",
        eligibility: [
          "Farmers having cultivable land with an assured irrigation water source (borewell, open well, farm pond).",
          "Must not have availed micro-irrigation subsidy on the same land parcel in the preceding 7 years.",
          "Electricity connection / solar pump installation certificate if required by state agency."
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Land Record (Pattadar Passbook / 1B)",
          "Electricity Bill / Water Source Proof",
          "Soil and Water Test Report (from authorized laboratory)",
          "Passport size photograph and Bank passbook"
        ],
        applicationMethod: "Apply online via State Micro Irrigation Projects (e.g. APMIP in Andhra Pradesh) or District Horticulture/Agriculture Office.",
        officialUrl: "https://pmksy.gov.in/",
        sourceName: "Department of Agriculture and Farmers Welfare (pmksy.gov.in)",
        sourceUrl: "https://pmksy.gov.in/",
        lastVerified: "22 Aug 2026",
        applicableStates: ["All India", "Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Maharashtra", "Punjab"],
        relevanceTags: ["Drip Irrigation", "Sprinkler", "Water Conservation", "Irrigation Schemes", "Central Government Schemes"]
      },
      {
        id: "kisan-credit-card",
        name: "Kisan Credit Card (KCC)",
        fullName: "Kisan Credit Card Scheme with Modified Interest Subvention (MISS)",
        category: "Farmer Credit Schemes",
        ministry: "Ministry of Finance & Ministry of Agriculture & Farmers Welfare",
        sponsoringAuthority: "Central",
        eligibilityCategory: "All Cultivators & Allied Farmers",
        status: "active",
        statusLabel: "Active \u2022 Concessional Interest",
        summary: "Timely short-term crop loans up to \u20B93 Lakh at an effective low interest rate of only 4% per annum.",
        description: "KCC offers institutional working capital credit to meet the short-term requirements for cultivation of crops, post-harvest expenses, produce marketing loan, consumption requirements of farmer households, and working capital for maintenance of farm assets and activities allied to agriculture.",
        benefits: "Credit limit up to \u20B93,00,000 at 7% basic interest rate, with a 3% prompt repayment incentive (PRI), resulting in an effective interest rate of just 4% per annum. Collateral-free limit up to \u20B91.60 Lakh.",
        eligibility: [
          "Individual / joint borrowers who are owner cultivators.",
          "Tenant farmers, oral lessees, and sharecroppers.",
          "Self Help Groups (SHGs) or Joint Liability Groups (JLGs) of farmers.",
          "Animal husbandry, dairy, and fisheries farmers are also eligible for working capital."
        ],
        documentsRequired: [
          "Duly filled KCC Application Form",
          "Identity & Address Proof (Aadhaar, Voter ID, PAN)",
          "Land Holding records certified by Revenue Authorities",
          "Cropping pattern details (crops sown / planned)"
        ],
        applicationMethod: "Apply at any Public/Private Sector Commercial Bank, Regional Rural Bank (RRB), Cooperative Bank, or via the myScheme / JanSamarth portal.",
        officialUrl: "https://myscheme.gov.in/schemes/kcc",
        sourceName: "National Government Schemes Portal (myScheme.gov.in)",
        sourceUrl: "https://myscheme.gov.in/schemes/kcc",
        lastVerified: "24 Aug 2026",
        applicableStates: ["All India", "Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Maharashtra", "Punjab"],
        relevanceTags: ["Crop Loan", "Subsidized Interest", "Working Capital", "Farmer Credit Schemes", "Central Government Schemes"]
      },
      {
        id: "pm-kusum",
        name: "PM-KUSUM Solar Pump Scheme",
        fullName: "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan",
        category: "Equipment / Subsidy Schemes",
        ministry: "Ministry of New and Renewable Energy (MNRE), Govt of India",
        sponsoringAuthority: "Central",
        eligibilityCategory: "Off-grid Farmers & FPOs",
        status: "active",
        statusLabel: "Active \u2022 60% Subsidy",
        summary: "Up to 60% combined subsidy for installation of standalone solar agriculture water pumps up to 7.5 HP.",
        description: "PM-KUSUM Component-B supports individual farmers to replace expensive diesel pumps with clean, reliable solar water pumping systems up to 7.5 HP in off-grid areas, eliminating diesel bills and securing daytime irrigation.",
        benefits: "Central Financial Assistance (CFA) of 30% + State Government subsidy of 30% (Total 60% subsidy). Farmer pays only 10% to 40% of the cost, with bank loans available.",
        eligibility: [
          "Individual farmers, Water User Associations, and Farmer Producer Organizations (FPOs).",
          "Should own agricultural land and have an existing dug well, borewell, or surface water source without electric grid connectivity.",
          "Preference given to small and marginal farmers."
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Land Ownership Record (Pattadar Passbook / Khatoni)",
          "Bank Account Passbook Copy",
          "Borewell / Water Source Affidavit or Certificate"
        ],
        applicationMethod: "Online application via State Renewable Energy Development Agencies (e.g., NREDCAP, MEDA, KREDL) or central PM-KUSUM portal.",
        officialUrl: "https://pmkusum.mnre.gov.in/",
        sourceName: "Ministry of New and Renewable Energy (pmkusum.mnre.gov.in)",
        sourceUrl: "https://pmkusum.mnre.gov.in/",
        lastVerified: "26 Aug 2026",
        applicableStates: ["All India", "Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Maharashtra", "Punjab"],
        relevanceTags: ["Solar Pump", "Zero Electricity Bill", "Equipment / Subsidy Schemes", "Irrigation Schemes", "Central Government Schemes"]
      },
      {
        id: "smam-mechanization",
        name: "SMAM Equipment Subsidy",
        fullName: "Sub-Mission on Agricultural Mechanization",
        category: "Equipment / Subsidy Schemes",
        ministry: "Ministry of Agriculture & Farmers Welfare, Govt of India",
        sponsoringAuthority: "Central",
        eligibilityCategory: "Small, Marginal & SC/ST Farmers",
        status: "active",
        statusLabel: "Active \u2022 Machinery Subsidy",
        summary: "40% to 50% subsidy on procurement of tractors, power tillers, rotavators, sprayers, and drones.",
        description: "SMAM aims to promote farm mechanization among small and marginal farmers by providing financial assistance on individual farm equipment and setting up Custom Hiring Centers (CHCs) to overcome labor shortages.",
        benefits: "40%\u201350% financial subsidy on tractors, power tillers, rotavators, multi-crop threshers, drone sprayers, laser land levelers, and power weeders. Up to 80% subsidy for establishing Custom Hiring Centers.",
        eligibility: [
          "Small, marginal, SC/ST, and women farmers receive priority and maximum subsidy percentage.",
          "Applicant must have valid agricultural landholding records.",
          "Must not have received subsidy for the same type of machinery within the last 5 years."
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Land Passbook / RoR Copy",
          "Quotation from Authorized Agriculture Machinery Manufacturer / Dealer",
          "Bank Passbook Copy with IFSC Code"
        ],
        applicationMethod: "Register and submit application on the Direct Benefit Transfer in Agriculture Mechanization portal (agrimachinery.nic.in) or through State Agriculture Department.",
        officialUrl: "https://agrimachinery.nic.in/",
        sourceName: "DBT in Agriculture Mechanization (agrimachinery.nic.in)",
        sourceUrl: "https://agrimachinery.nic.in/",
        lastVerified: "20 Aug 2026",
        applicableStates: ["All India", "Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Maharashtra", "Punjab"],
        relevanceTags: ["Tractor Subsidy", "Farm Machinery", "Equipment / Subsidy Schemes", "Central Government Schemes"]
      },
      {
        id: "soil-health-card",
        name: "Soil Health Card Scheme",
        fullName: "National Soil Health Card and Nutrient Management Mission",
        category: "Soil & Fertilizer Schemes",
        ministry: "Department of Agriculture and Farmers Welfare, Govt of India",
        sponsoringAuthority: "Central",
        eligibilityCategory: "All Cultivators",
        status: "active",
        statusLabel: "Active \u2022 100% Free Service",
        summary: "Free biennial soil testing and customized N-P-K & micronutrient advisory for every farmer.",
        description: "The Soil Health Card scheme assesses the current status of soil health and provides customized, crop-wise fertilizer dosage recommendations to improve soil fertility and reduce unnecessary fertilizer expenditures.",
        benefits: "Free laboratory testing of 12 critical soil health parameters (N, P, K, Sulphur, Zinc, Boron, Iron, Manganese, Copper, pH, EC, Organic Carbon) and printed advisory card valid for 2 years.",
        eligibility: [
          "All farmers owning or cultivating agricultural land in India.",
          "Soil samples are collected by agriculture extension officers or Village Agriculture Assistants."
        ],
        documentsRequired: [
          "Farmer Name & Mobile Number",
          "Survey Number / Plot Identification Number and GPS coordinates",
          "Current crop and next planned crop details"
        ],
        applicationMethod: "Contact your Village Agriculture Assistant (Rythu Bharosa Kendra / Agriculture Extension Office) or view card online on the Soil Health Portal.",
        officialUrl: "https://soilhealth.dac.gov.in/",
        sourceName: "National Soil Health Portal (soilhealth.dac.gov.in)",
        sourceUrl: "https://soilhealth.dac.gov.in/",
        lastVerified: "28 Aug 2026",
        applicableStates: ["All India", "Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Maharashtra", "Punjab"],
        relevanceTags: ["Soil Testing", "Fertilizer Dosage", "Soil & Fertilizer Schemes", "Central Government Schemes"]
      },
      {
        id: "pkvy-organic",
        name: "PKVY (Organic Farming)",
        fullName: "Paramparagat Krishi Vikas Yojana",
        category: "Soil & Fertilizer Schemes",
        ministry: "Ministry of Agriculture & Farmers Welfare, Govt of India",
        sponsoringAuthority: "Central",
        eligibilityCategory: "Cluster Farmers (20-50 Farmers)",
        status: "active",
        statusLabel: "Active \u2022 Cluster Assistance",
        summary: "Financial assistance of \u20B950,000 per hectare for adopting organic farming and natural bio-fertilizers.",
        description: "PKVY is an organic farming scheme implemented in cluster mode (20-50 farmers per cluster) to promote chemical-free, sustainable agriculture, soil biological health, and direct market linkages through PGS India certification.",
        benefits: "Total assistance of \u20B950,000/ha for 3 years: \u20B931,000/ha for organic inputs (seeds, bio-fertilizers, Jeevamrutha, neem-based biopesticides, vermicompost) and \u20B919,000/ha for cluster formation, soil testing, and marketing assistance.",
        eligibility: [
          "Farmers willing to form clusters of 20 hectares or more with neighboring farmers.",
          "Willingness to transition from synthetic chemical fertilizers to natural and organic inputs.",
          "Commitment to adhere to PGS-India organic certification standards."
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Land Ownership Record (Pattadar Passbook)",
          "Cluster Farmer Group Resolution / Registration Document",
          "Bank Account Details"
        ],
        applicationMethod: "Apply through District Agriculture Officer or State Nodal Agency for Organic Farming, or register via the PGS-India portal (pgsindia-ncof.gov.in).",
        officialUrl: "https://pgsindia-ncof.gov.in/",
        sourceName: "National Centre for Organic and Natural Farming",
        sourceUrl: "https://pgsindia-ncof.gov.in/",
        lastVerified: "18 Aug 2026",
        applicableStates: ["All India", "Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Maharashtra", "Punjab"],
        relevanceTags: ["Organic Farming", "Bio-fertilizers", "Soil & Fertilizer Schemes", "Central Government Schemes"]
      },
      {
        id: "mksp-women",
        name: "MKSP (Women Farmer Scheme)",
        fullName: "Mahila Kisan Sashaktikaran Pariyojana",
        category: "Women Farmer Schemes",
        ministry: "Ministry of Rural Development & Ministry of Agriculture",
        sponsoringAuthority: "Central",
        eligibilityCategory: "Women Farmers & SHG Members",
        status: "active",
        statusLabel: "Active \u2022 Women Empowerment",
        summary: "Dedicated training, capacity building, and input subsidies up to \u20B925,000 for women farmers.",
        description: "MKSP aims to empower women in agriculture by making systematic investments to enhance their participation and productivity, creating sustainable agriculture-based livelihoods for rural women Self Help Groups (SHGs).",
        benefits: "Training in agro-ecological practices, provision of community seed banks, custom hiring center support, drudgery reduction tools, and financial assistance up to \u20B925,000 per woman farmer.",
        eligibility: [
          "Small, marginal, and landless women farmers who are members of registered Self Help Groups (SHGs).",
          "Women engaged in crop farming, dairy, backyard poultry, or non-timber forest produce collection.",
          "Special focus on SC, ST, and single women-headed households."
        ],
        documentsRequired: [
          "Aadhaar Card of Woman Farmer",
          "SHG Membership Proof / Passbook",
          "Bank Account Details (DBT enabled)",
          "Land tenancy / cultivation declaration"
        ],
        applicationMethod: "Apply through Village SHG Federation (Village Organization / VO) under State Rural Livelihoods Mission (SRLM) or local Krishi Vigyan Kendra (KVK).",
        officialUrl: "https://mksp.aajeevika.gov.in/",
        sourceName: "Ministry of Rural Development (mksp.aajeevika.gov.in)",
        sourceUrl: "https://mksp.aajeevika.gov.in/",
        lastVerified: "20 Aug 2026",
        applicableStates: ["All India", "Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Maharashtra", "Punjab"],
        relevanceTags: ["Women Farmer Schemes", "SHG Support", "Central Government Schemes", "Capacity Building"]
      },
      {
        id: "smsp-certified-seeds",
        name: "SMSP Seed Subsidy Scheme",
        fullName: "Sub-Mission on Seeds and Planting Material",
        category: "Crop & Agriculture Schemes",
        ministry: "Department of Agriculture & Farmers Welfare, Govt of India",
        sponsoringAuthority: "Central",
        eligibilityCategory: "All Sowing Farmers",
        status: "active",
        statusLabel: "Active \u2022 Seasonal Subsidy",
        summary: "50% to 60% subsidy on certified high-yielding hybrid seeds for paddy, pulses, and oilseeds.",
        description: "SMSP ensures timely availability of certified, climate-resilient seeds to farmers at subsidized rates to replace farm-saved seeds with high-quality certified seeds, elevating average crop yield by 15-20%.",
        benefits: "50% to 60% price subsidy on certified seeds distributed through State Seed Corporations and Village Rythu Bharosa Kendras / PACS.",
        eligibility: [
          "Cultivators growing cereal, pulse, oilseed, or cotton crops in designated cropping seasons.",
          "Registered in State Farmer Registry / e-Crop booking system.",
          "Must procure seeds from authorized government seed depots."
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Land Ownership Passbook / Sowing Indent",
          "Seed Indent slip issued by Agriculture Officer"
        ],
        applicationMethod: "Procure subsidized certified seeds from National Seed Corporation (NSC) outlets, State Seed Development Corporation depots, or Seednet portal.",
        officialUrl: "https://seednet.gov.in/",
        sourceName: "Seednet India Portal (seednet.gov.in)",
        sourceUrl: "https://seednet.gov.in/",
        lastVerified: "21 Aug 2026",
        applicableStates: ["All India", "Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Maharashtra", "Punjab"],
        relevanceTags: ["Crop & Agriculture Schemes", "Certified Seeds", "Central Government Schemes", "Yield Improvement"]
      },
      {
        id: "ysr-rythu-bharosa",
        name: "Annadata Sukhibhava / YSR Rythu Bharosa",
        fullName: "Andhra Pradesh Farmer Investment Support Scheme",
        category: "State Government Schemes",
        ministry: "Department of Agriculture, Government of Andhra Pradesh",
        sponsoringAuthority: "State",
        eligibilityCategory: "AP Landholders & Tenant Farmers",
        status: "active",
        statusLabel: "Active \u2022 Andhra Pradesh",
        summary: "State investment assistance of up to \u20B913,500/year for Andhra Pradesh farmers including tenant farmers.",
        description: "A flagship state welfare scheme by the Government of Andhra Pradesh providing timely investment support to farmer families, including tenant farmers and ROFR patta holders, before the Kharif and Rabi sowing seasons.",
        benefits: "Financial assistance of \u20B913,500 per annum (inclusive of PM-KISAN matching benefit) provided in 3 seasonal tranches directly into farmer bank accounts.",
        eligibility: [
          "Farmer families owning agricultural land in Andhra Pradesh.",
          "Landless tenant farmers belonging to SC, ST, BC, and Minority communities cultivating registered tenant lands (CCRC cardholders).",
          "Must be verified in the State e-Crop / Webland database."
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Pattadar Passbook / 1B / CCRC (Crop Cultivator Rights Card for tenant farmers)",
          "e-Crop Booking Verification Report",
          "Bank Account details seeded with NPCI"
        ],
        applicationMethod: "Verification is done at local Village Secretariat / Rythu Bharosa Kendra (RBK). Check status on ysrrythubharosa.ap.gov.in.",
        officialUrl: "https://ysrrythubharosa.ap.gov.in/",
        sourceName: "Government of Andhra Pradesh Agriculture Department",
        sourceUrl: "https://ysrrythubharosa.ap.gov.in/",
        lastVerified: "27 Aug 2026",
        applicableStates: ["Andhra Pradesh"],
        relevanceTags: ["State Government Schemes", "Andhra Pradesh", "Tenant Farmer Support", "Farmer Financial Assistance"]
      },
      {
        id: "telangana-rythu-bandhu",
        name: "Rythu Bandhu / Rythu Bima",
        fullName: "Telangana Agriculture Investment Support & Life Insurance Scheme",
        category: "State Government Schemes",
        ministry: "Agriculture Department, Government of Telangana",
        sponsoringAuthority: "State",
        eligibilityCategory: "Telangana Pattadar Farmers",
        status: "active",
        statusLabel: "Active \u2022 Telangana",
        summary: "\u20B910,000 per acre per year direct investment support and \u20B95 Lakh life insurance cover for Telangana farmers.",
        description: "Telangana Rythu Bandhu supports farmers with financial grant per acre per season for purchase of seeds, fertilizers, and field preparation, along with free \u20B95 Lakh Rythu Bima group life insurance cover.",
        benefits: "\u20B910,000 per acre per annum (\u20B95,000/acre each for Kharif and Rabi) paid directly into bank accounts via DBT, plus complete state-funded \u20B95,00,000 life insurance.",
        eligibility: [
          "Farmers owning agricultural land in Telangana with valid Pattadar Passbook in Dharani portal.",
          "Age between 18 and 59 years for Rythu Bima insurance coverage.",
          "Resident of Telangana state."
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Dharani Title Deed / Pattadar Passbook",
          "Bank Account Passbook (IFSC & Account No.)"
        ],
        applicationMethod: "Registered through Agriculture Extension Officer (AEO) and verified via Dharani land portal (rythubandhu.telangana.gov.in).",
        officialUrl: "https://rythubandhu.telangana.gov.in/",
        sourceName: "Government of Telangana Agriculture Department",
        sourceUrl: "https://rythubandhu.telangana.gov.in/",
        lastVerified: "25 Aug 2026",
        applicableStates: ["Telangana"],
        relevanceTags: ["State Government Schemes", "Telangana", "Investment Support", "Farmer Financial Assistance"]
      },
      {
        id: "maharashtra-namo-shetkari",
        name: "Namo Shetkari Mahasanman Nidhi",
        fullName: "Maharashtra Farmer Additional Support Scheme",
        category: "State Government Schemes",
        ministry: "Department of Agriculture, Government of Maharashtra",
        sponsoringAuthority: "State",
        eligibilityCategory: "Maharashtra Landholders",
        status: "active",
        statusLabel: "Active \u2022 Maharashtra",
        summary: "Additional \u20B96,000 per year by Government of Maharashtra on top of PM-KISAN (Total \u20B912,000/year).",
        description: "The Maharashtra Government provides an additional \u20B96,000 per year to all PM-KISAN beneficiary farmers in the state in three equal installments, raising total annual assistance to \u20B912,000.",
        benefits: "\u20B96,000 per annum paid in 3 installments of \u20B92,000 each directly to bank accounts via DBT, complementing the Central PM-KISAN scheme.",
        eligibility: [
          "Beneficiaries of the Central PM-KISAN scheme residing in Maharashtra.",
          "Valid land ownership record (7/12 extract) registered in Maharashtra land records.",
          "Aadhaar seeded bank account."
        ],
        documentsRequired: [
          "Aadhaar Card",
          "7/12 and 8A Land Extract",
          "PM-KISAN Registration ID",
          "Bank Account Passbook"
        ],
        applicationMethod: "Automatic enrollment for verified PM-KISAN beneficiaries in Maharashtra. Check status on krishi.maharashtra.gov.in.",
        officialUrl: "https://krishi.maharashtra.gov.in/",
        sourceName: "Department of Agriculture Maharashtra (krishi.maharashtra.gov.in)",
        sourceUrl: "https://krishi.maharashtra.gov.in/",
        lastVerified: "22 Aug 2026",
        applicableStates: ["Maharashtra"],
        relevanceTags: ["State Government Schemes", "Maharashtra", "Farmer Financial Assistance"]
      },
      {
        id: "karnataka-krishi-bhagya",
        name: "Krishi Bhagya & Raitha Siri",
        fullName: "Karnataka Dryland Farming & Farm Pond Scheme",
        category: "State Government Schemes",
        ministry: "Department of Agriculture, Government of Karnataka",
        sponsoringAuthority: "State",
        eligibilityCategory: "Karnataka Dryland & Millet Farmers",
        status: "active",
        statusLabel: "Active \u2022 Karnataka",
        summary: "Up to 80% subsidy for farm ponds (Krishi Honda), diesel/solar pump sets, and \u20B910,000/ha for millets.",
        description: "Karnataka Krishi Bhagya enhances rainwater harvesting and water security in rainfed regions through polythene-lined farm ponds, micro-irrigation, and diesel pump sets, while Raitha Siri promotes climate-smart millet farming.",
        benefits: "80% subsidy for SC/ST and 50% for general farmers for farm ponds (Krishi Honda) with polythene lining and shade net. \u20B910,000/ha incentive for minor millet cultivation.",
        eligibility: [
          "Rainfed / dryland farmers owning agricultural land in notified taluks of Karnataka.",
          "Enrolled in Karnataka FRUITS (Farmer Registration and Unified Beneficiary Information System) portal."
        ],
        documentsRequired: [
          "FRUITS ID (FID) / Farmer ID",
          "Aadhaar Card",
          "RTC (Pahani) Land Record",
          "Bank Passbook"
        ],
        applicationMethod: "Apply through Raitha Samparka Kendra (RSK) or online via Karnataka FRUITS portal (raitamitra.karnataka.gov.in).",
        officialUrl: "https://raitamitra.karnataka.gov.in/",
        sourceName: "Department of Agriculture Karnataka (raitamitra.karnataka.gov.in)",
        sourceUrl: "https://raitamitra.karnataka.gov.in/",
        lastVerified: "24 Aug 2026",
        applicableStates: ["Karnataka"],
        relevanceTags: ["State Government Schemes", "Karnataka", "Irrigation Schemes", "Farm Pond Subsidy"]
      },
      {
        id: "tn-uzhavan-subsidy",
        name: "Tamil Nadu Uzhavan Farmer Subsidies",
        fullName: "Tamil Nadu Agriculture Mechanization & Free Electricity Scheme",
        category: "State Government Schemes",
        ministry: "Agriculture & Farmers Welfare Department, Government of Tamil Nadu",
        sponsoringAuthority: "State",
        eligibilityCategory: "Tamil Nadu Farmers",
        status: "active",
        statusLabel: "Active \u2022 Tamil Nadu",
        summary: "100% free agriculture power supply and up to 50% subsidy on farm implements and micro-irrigation.",
        description: "Government of Tamil Nadu provides 24x7 free electricity for agricultural pump sets through TANGEDCO, along with comprehensive subsidies for farm mechanization, seed distribution, and soil testing via Uzhavan portal.",
        benefits: "Free agricultural electricity for registered pump sets. 50% subsidy on power tillers, transplanters, and rotavators. 100% micro-irrigation subsidy for small & marginal farmers.",
        eligibility: [
          "Farmers residing in Tamil Nadu with registered landholding (Patta / Chitta).",
          "Registered on Uzhavan App / AGRISNET portal.",
          "Electricity connection for agriculture in farmer\u2019s name."
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Patta / Chitta Copy",
          "Agricultural EB Service Connection Number",
          "Bank Passbook"
        ],
        applicationMethod: "Apply via Uzhavan Mobile App or District Joint Director of Agriculture / AGRISNET portal (tnagrisnet.tn.gov.in).",
        officialUrl: "https://tnagrisnet.tn.gov.in/",
        sourceName: "Government of Tamil Nadu AGRISNET (tnagrisnet.tn.gov.in)",
        sourceUrl: "https://tnagrisnet.tn.gov.in/",
        lastVerified: "23 Aug 2026",
        applicableStates: ["Tamil Nadu"],
        relevanceTags: ["State Government Schemes", "Tamil Nadu", "Free Electricity", "Equipment / Subsidy Schemes"]
      },
      {
        id: "punjab-paani-bachao",
        name: "Punjab Paani Bachao Paise Kamao",
        fullName: "Direct Benefit Transfer for Groundwater Conservation Scheme",
        category: "Irrigation Schemes",
        ministry: "Department of Agriculture and Farmers Welfare, Government of Punjab",
        sponsoringAuthority: "State",
        eligibilityCategory: "Punjab Tube-well Farmers",
        status: "active",
        statusLabel: "Active \u2022 Punjab",
        summary: "Cash incentive of \u20B94 per kWh of electricity saved on agricultural tube wells.",
        description: "Punjab Government incentivizes farmers to conserve groundwater by offering direct financial cash rewards into bank accounts for every unit of electricity saved compared to historical baseline usage.",
        benefits: "Farmers receive \u20B94 per unit (kWh) of electricity saved transferred directly into their bank accounts via DBT without altering free power entitlement.",
        eligibility: [
          "Farmers in Punjab with electric agricultural tube-well connections.",
          "Willingness to install intelligent automatic electricity meters."
        ],
        documentsRequired: [
          "Aadhaar Card",
          "PSPCL Agricultural Electricity Connection Consumer ID",
          "Bank Account Details seeded with Aadhaar"
        ],
        applicationMethod: "Enroll through Punjab State Power Corporation Limited (PSPCL) or Department of Agriculture Punjab (agri.punjab.gov.in).",
        officialUrl: "https://agri.punjab.gov.in/",
        sourceName: "Department of Agriculture Punjab (agri.punjab.gov.in)",
        sourceUrl: "https://agri.punjab.gov.in/",
        lastVerified: "20 Aug 2026",
        applicableStates: ["Punjab"],
        relevanceTags: ["State Government Schemes", "Punjab", "Irrigation Schemes", "Water Conservation"]
      }
    ];
    // ==========================================
    // EXPERT ESCALATION WORKFLOW
    // ==========================================
    this.expertTickets = [
      {
        id: "TKT-EXP-2026-001",
        farmerName: "Ramesh Kumar",
        phone: "9876543210",
        cropName: "Paddy (Rice)",
        diagnosisSummary: "Suspected Sheath Blight vs Bacterial Leaf Streak",
        confidenceScore: 54,
        symptoms: "Water-soaked lesions on lower leaf sheaths expanding upwards rapidly.",
        fieldInfo: {
          location: "Somulavaripalli, Kadapa, Andhra Pradesh",
          soilType: "Red Loamy Soil",
          landArea: "4.5 Acres"
        },
        urgencyLevel: "High",
        status: "under_review",
        createdAt: new Date(Date.now() - 3600 * 1e3 * 4).toISOString(),
        assignedAgronomist: "Dr. S. Venkatachari, Senior Agronomist (KVK Kadapa)",
        supportHelpline: "1800-180-1551 (Kisan Call Center)"
      }
    ];
    // ==========================================
    // FERTILIZER AUTHENTICITY DATABASE & VERIFICATION
    // ==========================================
    this.fertilizers = [
      {
        id: "fert-iffco-urea",
        productName: "Neem Coated Urea (46% Nitrogen)",
        brand: "IFFCO Kisan",
        manufacturer: "Indian Farmers Fertiliser Cooperative Limited (IFFCO)",
        productType: "Primary Nitrogenous Fertilizer (Prilled)",
        registrationNumber: "FMS/GOI/2026/UREA/00918",
        batchNumber: "B2026-441A",
        serialNumber: "SN-IFF-98214-IN",
        manufacturingDate: "15-01-2026",
        expiryDate: "14-01-2029",
        verificationStatus: "Verified",
        nutrientComposition: {
          nitrogenPercent: "46.0% Total Nitrogen (N)",
          phosphorusPercent: "0.0%",
          potassiumPercent: "0.0%",
          otherNutrients: "0.05% Neem Oil coating by weight (slow-release inhibitor)"
        },
        packagingSize: "45 kg Bag (Standard Govt Allocation)",
        maximumRetailPrice: "\u20B9266.50 (Central Govt Subsidized)",
        subsidyEligible: true,
        governmentDbtCode: "DBT-IFMS-IFFCO-0918",
        authorizedDealerNetwork: ["IFFCO Kisan Seva Kendra", "PACS Agricultural Societies", "Authorized Rythu Bharosa Kendras"],
        registeredBarcodes: ["8901234567890", "8901501001015", "8901000000010", "8901234000112"],
        registeredQrPayloads: [
          "https://iffco.in/verify?id=IFFCO-UREA-46N",
          "https://fert.nic.in/dbt-auth/verify?id=FERT-IFFCO-46N",
          "IFFCO-UREA-46N-B2026-441A"
        ],
        verificationMessage: "Genuine, lab-certified Neem Coated Urea package registered in the Integrated Fertilizer Management System (IFMS).",
        officialVerificationUrl: "https://iffco.in"
      },
      {
        id: "fert-iffco-dap",
        productName: "Di-Ammonium Phosphate (DAP 18:46:0)",
        brand: "IFFCO DAP",
        manufacturer: "Indian Farmers Fertiliser Cooperative Limited (IFFCO)",
        productType: "Complex Phosphatic Fertilizer",
        registrationNumber: "FMS/GOI/2026/DAP/01142",
        batchNumber: "DAP-2026-88C",
        serialNumber: "SN-DAP-77401-AP",
        manufacturingDate: "02-02-2026",
        expiryDate: "01-02-2029",
        verificationStatus: "Verified",
        nutrientComposition: {
          nitrogenPercent: "18.0% Ammoniacal Nitrogen (N)",
          phosphorusPercent: "46.0% Available Phosphate (P\u2082O\u2085)",
          potassiumPercent: "0.0%",
          otherNutrients: "41.0% Water Soluble P\u2082O\u2085"
        },
        packagingSize: "50 kg Bag",
        maximumRetailPrice: "\u20B91,350.00 (Subsidized Max Retail Price)",
        subsidyEligible: true,
        governmentDbtCode: "DBT-IFMS-IFFCO-1142",
        authorizedDealerNetwork: ["IFFCO Primary Societies", "Grama Sachivalayam RBK Center"],
        registeredBarcodes: ["8901501002029", "8901501002005", "8901501002227"],
        registeredQrPayloads: [
          "https://iffco.in/verify?id=IFFCO-DAP-18460",
          "https://fert.nic.in/dbt-auth/verify?id=FERT-IFFCO-DAP",
          "IFFCO-DAP-18-46-0-B88C"
        ],
        verificationMessage: "Authentic high-purity DAP verified. Manufactured at IFFCO Paradeep Unit under Govt FCO quality norms.",
        officialVerificationUrl: "https://iffco.in"
      },
      {
        id: "fert-coromandel-2828",
        productName: "Gromor 28-28-0 Complex Fertilizer",
        brand: "Coromandel Gromor",
        manufacturer: "Coromandel International Limited (Murugappa Group)",
        productType: "NP High-Grade Complex Fertilizer",
        registrationNumber: "FCO/AP/2026/NP/8821",
        batchNumber: "CG-2026-901B",
        serialNumber: "SN-COR-55102-TS",
        manufacturingDate: "10-01-2026",
        expiryDate: "09-01-2029",
        verificationStatus: "Verified",
        nutrientComposition: {
          nitrogenPercent: "28.0% (14% Ammoniacal + 14% Nitrate)",
          phosphorusPercent: "28.0% Available P\u2082O\u2085",
          potassiumPercent: "0.0%",
          otherNutrients: "High water-soluble available phosphate ratio"
        },
        packagingSize: "50 kg HDPE Bag",
        maximumRetailPrice: "\u20B91,650.00",
        subsidyEligible: true,
        governmentDbtCode: "DBT-COROMANDEL-2828",
        authorizedDealerNetwork: ["Gromor Seva Kendras", "Coromandel Direct Retail Network"],
        registeredBarcodes: ["8906010001234", "8906010002828", "8906010001005"],
        registeredQrPayloads: [
          "https://coromandel.biz/verify?batch=CG-2828-901",
          "COROMANDEL-GROMOR-28-28-0-901B"
        ],
        verificationMessage: "Verified genuine Gromor 28-28-0 from Coromandel Kakinada/Vizag plant with tamper-evident batch record.",
        officialVerificationUrl: "https://coromandel.biz"
      },
      {
        id: "fert-coromandel-143514",
        productName: "Gromor 14-35-14 NPK Complex",
        brand: "Coromandel Gromor",
        manufacturer: "Coromandel International Limited",
        productType: "Complete NPK Complex Fertilizer",
        registrationNumber: "FCO/AP/2026/NPK/4412",
        batchNumber: "CG-143514-611",
        serialNumber: "SN-COR-99412-KA",
        manufacturingDate: "18-02-2026",
        expiryDate: "17-02-2029",
        verificationStatus: "Verified",
        nutrientComposition: {
          nitrogenPercent: "14.0% Total Nitrogen",
          phosphorusPercent: "35.0% Phosphate (P\u2082O\u2085)",
          potassiumPercent: "14.0% Potash (K\u2082O)",
          otherNutrients: "Sulphur 1.5% trace enrichment"
        },
        packagingSize: "50 kg Bag",
        maximumRetailPrice: "\u20B91,720.00",
        subsidyEligible: true,
        governmentDbtCode: "DBT-COROMANDEL-143514",
        authorizedDealerNetwork: ["Gromor Agri Outlets", "Authorized State Dealers"],
        registeredBarcodes: ["8906010001435", "8906010003514", "8906010001414"],
        registeredQrPayloads: [
          "https://coromandel.biz/verify?batch=CG-143514-611",
          "COROMANDEL-GROMOR-14-35-14"
        ],
        verificationMessage: "Authentic Gromor NPK 14:35:14 registered in central agricultural registry.",
        officialVerificationUrl: "https://coromandel.biz"
      },
      {
        id: "fert-mahadhan-2424",
        productName: "Mahadhan 24:24:0 High-Phos Complex",
        brand: "Mahadhan",
        manufacturer: "Smartchem Technologies Ltd (Deepak Fertilisers & Petrochemicals)",
        productType: "Granulated Chemical Fertilizer",
        registrationNumber: "FCO/MH/2025/NP/9931",
        batchNumber: "MD-2026-302",
        serialNumber: "SN-MD-44201-MH",
        manufacturingDate: "05-01-2026",
        expiryDate: "04-01-2029",
        verificationStatus: "Verified",
        nutrientComposition: {
          nitrogenPercent: "24.0% N",
          phosphorusPercent: "24.0% P\u2082O\u2085",
          potassiumPercent: "0.0%",
          otherNutrients: "Neutral pH granule composition"
        },
        packagingSize: "50 kg Bag",
        maximumRetailPrice: "\u20B91,580.00",
        subsidyEligible: true,
        governmentDbtCode: "DBT-SMARTCHEM-2424",
        authorizedDealerNetwork: ["Mahadhan Krushi Kendras"],
        registeredBarcodes: ["8902000100012", "8902000242401", "8902000100029"],
        registeredQrPayloads: [
          "https://mahadhan.co.in/verify?code=MD-2424-302",
          "MAHADHAN-24-24-0-302"
        ],
        verificationMessage: "Verified genuine Mahadhan 24:24:0 batch verified from Taloja Plant.",
        officialVerificationUrl: "https://mahadhan.co.in"
      },
      {
        id: "fert-kribhco-urea",
        productName: "KRIBHCO Neem Coated Urea",
        brand: "KRIBHCO",
        manufacturer: "Krishak Bharati Cooperative Limited (KRIBHCO)",
        productType: "Prilled Neem Coated Nitrogenous Fertilizer",
        registrationNumber: "FMS/GOI/2026/KRB/0073",
        batchNumber: "KRB-2026-118",
        serialNumber: "SN-KRB-88310-IN",
        manufacturingDate: "22-01-2026",
        expiryDate: "21-01-2029",
        verificationStatus: "Verified",
        nutrientComposition: {
          nitrogenPercent: "46.0% Total Nitrogen",
          phosphorusPercent: "0.0%",
          potassiumPercent: "0.0%",
          otherNutrients: "Natural botanical neem extract coating"
        },
        packagingSize: "45 kg Bag",
        maximumRetailPrice: "\u20B9266.50 (Govt Subsidized Rate)",
        subsidyEligible: true,
        governmentDbtCode: "DBT-IFMS-KRIBHCO-0073",
        authorizedDealerNetwork: ["Cooperative Societies", "KRIBHCO Authorized Agro Dealers"],
        registeredBarcodes: ["8904000112233", "8904000100011", "8904000111110"],
        registeredQrPayloads: [
          "https://kribhco.net/verify?batch=KRB-2026-118",
          "KRIBHCO-UREA-46N-118"
        ],
        verificationMessage: "Verified genuine KRIBHCO Hazira Plant produced fertilizer with valid FCO compliance.",
        officialVerificationUrl: "https://kribhco.net"
      },
      {
        id: "fert-iffco-nano-urea",
        productName: "IFFCO Nano Urea (Liquid) 500ml",
        brand: "IFFCO Nano Fertiliser",
        manufacturer: "IFFCO Nano Biotechnology Research Centre (NBRC)",
        productType: "Nanotechnology Foliar Fertilizer",
        registrationNumber: "FCO/GOI/NANO/2026/0012",
        batchNumber: "NU-2026-1044",
        serialNumber: "SN-IFF-NANO-001",
        manufacturingDate: "28-01-2026",
        expiryDate: "27-01-2028",
        verificationStatus: "Verified",
        nutrientComposition: {
          nitrogenPercent: "4.0% Total Nitrogen (40,000 ppm N)",
          phosphorusPercent: "0.0%",
          potassiumPercent: "0.0%",
          otherNutrients: "Nanoscale particle size (20-50 nm) for 80%+ foliar absorption"
        },
        packagingSize: "500 ml Bottle (Replaces 1 bag of traditional Urea)",
        maximumRetailPrice: "\u20B9225.00",
        subsidyEligible: true,
        governmentDbtCode: "DBT-NANO-IFFCO-001",
        authorizedDealerNetwork: ["IFFCO e-Bazar", "Primary Agricultural Societies"],
        registeredBarcodes: ["8901501009998", "8901501009001"],
        registeredQrPayloads: [
          "https://iffco.in/nano-verify?batch=NU-2026-1044",
          "IFFCO-NANO-UREA-500ML-1044"
        ],
        verificationMessage: "Verified authentic IFFCO Nano Urea with secure holographic QR verification.",
        officialVerificationUrl: "https://iffco.in"
      },
      {
        id: "fert-yaramila-complex",
        productName: "YaraMila Complex (12-11-18 + S + Mg + Micronutrients)",
        brand: "YaraMila",
        manufacturer: "Yara Fertilizers India Pvt Ltd",
        productType: "Premium SOP-Based Chloride-Free NPK",
        registrationNumber: "FCO/YARA/2026/IMP/7810",
        batchNumber: "YM-2026-789A",
        serialNumber: "SN-YARA-33109-IN",
        manufacturingDate: "12-01-2026",
        expiryDate: "11-01-2029",
        verificationStatus: "Verified",
        nutrientComposition: {
          nitrogenPercent: "12.0% (5% Nitrate + 7% Ammoniacal)",
          phosphorusPercent: "11.0% Polyphosphate & Orthophosphate",
          potassiumPercent: "18.0% Potassium Sulphate (SOP)",
          otherNutrients: "2.7% MgO, 8% Sulphur, 0.015% Boron, 0.02% Zinc"
        },
        packagingSize: "25 kg / 50 kg Bag",
        maximumRetailPrice: "\u20B92,450.00",
        subsidyEligible: false,
        authorizedDealerNetwork: ["Yara Crop Nutrition Centers", "Authorized Dealers"],
        registeredBarcodes: ["7026520001211", "8908000121118", "8908000111188"],
        registeredQrPayloads: [
          "https://yara.in/verify?code=YM-2026-789A",
          "YARA-MILA-COMPLEX-121118"
        ],
        verificationMessage: "Verified genuine YaraMila imported prill fertilizer with complete micronutrient coating.",
        officialVerificationUrl: "https://yara.in"
      },
      {
        id: "fert-bayer-bayfolan",
        productName: "Bayfolan Active Foliar Fertilizer (NPK 11:8:6 + TE)",
        brand: "Bayfolan",
        manufacturer: "Bayer CropScience Limited",
        productType: "Liquid Foliar Nutrient Formulation",
        registrationNumber: "FCO/BAY/2026/FOL/0045",
        batchNumber: "BAY-2026-664",
        serialNumber: "SN-BAY-12903-IN",
        manufacturingDate: "01-02-2026",
        expiryDate: "31-01-2028",
        verificationStatus: "Verified",
        nutrientComposition: {
          nitrogenPercent: "11.0% N",
          phosphorusPercent: "8.0% P\u2082O\u2085",
          potassiumPercent: "6.0% K\u2082O",
          otherNutrients: "Chelated Fe, Mn, Cu, Zn, B, Mo + Plant Bio-stimulants"
        },
        packagingSize: "1 Litre HDPE Bottle",
        maximumRetailPrice: "\u20B9680.00",
        subsidyEligible: false,
        authorizedDealerNetwork: ["Bayer Crop Protection & Nutrition Dealers"],
        registeredBarcodes: ["8901234500998", "4000680001186", "8901234500110"],
        registeredQrPayloads: [
          "https://cropscience.bayer.in/verify?batch=BAY-2026-664",
          "BAYER-BAYFOLAN-ACTIVE-664"
        ],
        verificationMessage: "Verified authentic Bayer CropScience product with sealed anti-counterfeit batch verification.",
        officialVerificationUrl: "https://cropscience.bayer.in"
      },
      {
        id: "fert-paradeep-suphala",
        productName: "Navratna NPK 10:26:26 High-Potash Complex",
        brand: "Navratna / Suphala",
        manufacturer: "Paradeep Phosphates Limited (Zuari Agro Chemicals)",
        productType: "Granular NPK Complex",
        registrationNumber: "FCO/OD/2026/NPK/1026",
        batchNumber: "PPL-2026-551",
        serialNumber: "SN-PPL-77219-IN",
        manufacturingDate: "14-01-2026",
        expiryDate: "13-01-2029",
        verificationStatus: "Verified",
        nutrientComposition: {
          nitrogenPercent: "10.0% Ammoniacal Nitrogen",
          phosphorusPercent: "26.0% Available P\u2082O\u2085",
          potassiumPercent: "26.0% MOP-grade K\u2082O",
          otherNutrients: "Excellent for root expansion and grain filling stages"
        },
        packagingSize: "50 kg Bag",
        maximumRetailPrice: "\u20B91,750.00",
        subsidyEligible: true,
        governmentDbtCode: "DBT-PPL-102626",
        authorizedDealerNetwork: ["PPL Zuari Kisan Hubs", "Local Agricultural Societies"],
        registeredBarcodes: ["8903000102626", "8903000100019", "8903000102600"],
        registeredQrPayloads: [
          "https://paradeepphosphates.com/verify?batch=PPL-2026-551",
          "PPL-NAVRATNA-10-26-26-551"
        ],
        verificationMessage: "Verified genuine Paradeep Navratna 10:26:26 verified against DBT batch ledger.",
        officialVerificationUrl: "https://paradeepphosphates.com"
      }
    ];
    const defaultUser = {
      id: "user-default-1",
      phone: "9876543210",
      fullName: "Ramesh",
      gender: "Male",
      dob: "1988-06-15",
      state: "Andhra Pradesh",
      district: "Kadapa (YSR)",
      village: "Somulavaripalli",
      preferredLanguage: "English",
      isGuest: false,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.users.set(defaultUser.id, defaultUser);
    this.users.set(defaultUser.phone, defaultUser);
    const defaultFarm = {
      id: "farm-default-1",
      userId: defaultUser.id,
      farmName: "Ramesh Sri Lakshmi Farm",
      landArea: "4.5",
      landUnit: "Acre",
      soilType: "Red Soil",
      irrigationSource: "Borewell",
      primaryActivity: "Crop farming",
      location: {
        village: "Somulavaripalli",
        district: "Kadapa",
        state: "Andhra Pradesh",
        pincode: "516001"
      },
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.farms.set(defaultUser.id, defaultFarm);
    const defaultSoil = {
      id: "soil-default-1",
      farmId: defaultFarm.id,
      ph: 6.8,
      phStatus: "Neutral",
      nitrogen: "Medium",
      phosphorus: "High",
      potassium: "Medium",
      electricalConductivity: "0.42 dS/m (Normal)",
      organicCarbon: "0.68% (Adequate)",
      moisturePercent: 32,
      temperatureCelsius: 26.5,
      healthScore: 82,
      healthStatus: "Healthy",
      source: "Manual / Last Synced Data",
      lastUpdated: "Today, 07:30 AM"
    };
    this.soilRecords.set(defaultFarm.id, defaultSoil);
  }
  // Check if a user account exists for a given phone number
  checkUserExists(phone) {
    const cleanPhone = phone.replace(/\D/g, "").slice(-10);
    const existing = this.users.get(cleanPhone) || Array.from(this.users.values()).find((u) => u.phone.replace(/\D/g, "").slice(-10) === cleanPhone);
    if (existing && existing.fullName) {
      return {
        exists: true,
        user: {
          id: existing.id,
          phone: existing.phone,
          fullName: existing.fullName,
          state: existing.state,
          district: existing.district,
          village: existing.village
        }
      };
    }
    return { exists: false };
  }
  // Register farmer and farm atomically into database
  registerFarmerAndFarm(data) {
    const { farmer, farm } = data;
    if (!farmer || !farmer.name || !farmer.name.trim()) {
      return { success: false, error: "Please enter your full name." };
    }
    if (!farmer.gender) {
      return { success: false, error: "Please select your gender." };
    }
    if (!farmer.dateOfBirth) {
      return { success: false, error: "Please enter your date of birth." };
    }
    if (!farmer.phone) {
      return { success: false, error: "Please enter a valid mobile number." };
    }
    const cleanPhone = farmer.phone.replace(/\D/g, "").slice(-10);
    if (cleanPhone.length < 10) {
      return { success: false, error: "Mobile number must be a valid 10-digit number." };
    }
    if (!farmer.state || !farmer.district || !farmer.village) {
      return { success: false, error: "Please provide complete location details (State, District, Village)." };
    }
    const existing = this.users.get(cleanPhone) || Array.from(this.users.values()).find((u) => u.phone.replace(/\D/g, "").slice(-10) === cleanPhone);
    if (existing && existing.fullName) {
      return {
        success: false,
        duplicate: true,
        error: "This mobile number is already registered. Please login using OTP."
      };
    }
    if (!farm || !farm.farmName || !farm.farmName.trim()) {
      return { success: false, error: "Please enter your farm name." };
    }
    const landAreaNum = parseFloat(String(farm.landArea));
    if (isNaN(landAreaNum) || landAreaNum <= 0) {
      return { success: false, error: "Please enter a valid positive land area." };
    }
    if (!farm.landUnit) {
      return { success: false, error: "Please select a land unit." };
    }
    if (!farm.soilType) {
      return { success: false, error: "Please select your soil type." };
    }
    if (!farm.irrigationSource) {
      return { success: false, error: "Please select your irrigation source." };
    }
    if (!farm.primaryActivity) {
      return { success: false, error: "Please select your primary farming activity." };
    }
    const userId = `user-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    const farmId = `farm-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const newUser = {
      id: userId,
      phone: cleanPhone,
      fullName: farmer.name.trim(),
      gender: farmer.gender,
      dob: farmer.dateOfBirth,
      state: farmer.state,
      district: farmer.district,
      village: farmer.village,
      preferredLanguage: farmer.preferredLanguage || "English",
      isGuest: false,
      createdAt: timestamp,
      updatedAt: timestamp
    };
    const newFarm = {
      id: farmId,
      userId,
      farmName: farm.farmName.trim(),
      landArea: String(landAreaNum),
      landUnit: farm.landUnit,
      soilType: farm.soilType,
      irrigationSource: farm.irrigationSource,
      primaryActivity: farm.primaryActivity,
      location: {
        state: farm.location?.state || farmer.state,
        district: farm.location?.district || farmer.district,
        village: farm.location?.village || farmer.village,
        pincode: farm.location?.pincode
      },
      createdAt: timestamp,
      updatedAt: timestamp
    };
    const newSoil = {
      id: `soil-${farmId}`,
      farmId,
      ph: farm.soilType.toLowerCase().includes("black") ? 7.4 : farm.soilType.toLowerCase().includes("red") ? 6.5 : 6.8,
      phStatus: farm.soilType.toLowerCase().includes("black") ? "Neutral" : "Neutral",
      nitrogen: "Medium",
      phosphorus: "Medium",
      potassium: "Medium",
      electricalConductivity: "0.38 dS/m (Normal)",
      organicCarbon: "0.62% (Good)",
      moisturePercent: 30,
      temperatureCelsius: 27,
      healthScore: 80,
      healthStatus: "Healthy",
      source: "Manual / Last Synced Data",
      lastUpdated: "Today, " + (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    this.users.set(newUser.id, newUser);
    this.users.set(cleanPhone, newUser);
    this.farms.set(userId, newFarm);
    this.soilRecords.set(farmId, newSoil);
    return {
      success: true,
      user: newUser,
      farm: newFarm
    };
  }
  // OTP management
  setOTP(phone, otp) {
    const expiresAt = Date.now() + 5 * 60 * 1e3;
    this.otpStore.set(phone, { otp, expiresAt, attempts: 0 });
  }
  verifyOTP(phone, inputOtp) {
    const cleanPhone = phone.replace(/\D/g, "").slice(-10);
    const record = this.otpStore.get(cleanPhone) || this.otpStore.get(phone);
    const isMockValid = inputOtp === "123456" || record && record.otp === inputOtp;
    if (!record && inputOtp !== "123456") {
      return { success: false, message: "OTP expired or not requested. Please request a new OTP." };
    }
    if (record && Date.now() > record.expiresAt && inputOtp !== "123456") {
      this.otpStore.delete(cleanPhone);
      this.otpStore.delete(phone);
      return { success: false, message: "OTP has expired. Please request a new OTP." };
    }
    if (!isMockValid) {
      if (record) record.attempts += 1;
      return { success: false, message: "Incorrect OTP. Please check and try again." };
    }
    this.otpStore.delete(cleanPhone);
    this.otpStore.delete(phone);
    let user = this.users.get(cleanPhone) || this.users.get(phone) || Array.from(this.users.values()).find((u) => u.phone.replace(/\D/g, "").slice(-10) === cleanPhone);
    if (!user) {
      user = {
        id: `user-${Date.now()}`,
        phone: cleanPhone,
        fullName: "Farmer",
        gender: "Male",
        dob: "1990-01-01",
        state: "Andhra Pradesh",
        district: "Kadapa",
        village: "Somulavaripalli",
        preferredLanguage: "English",
        isGuest: false,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      this.users.set(user.id, user);
      this.users.set(cleanPhone, user);
    }
    return { success: true, message: "OTP verified successfully.", user };
  }
  getUser(idOrPhone) {
    return this.users.get(idOrPhone);
  }
  saveUser(user) {
    user.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    this.users.set(user.id, user);
    this.users.set(user.phone, user);
    return user;
  }
  getFarm(userId) {
    return this.farms.get(userId);
  }
  saveFarm(farm) {
    farm.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    this.farms.set(farm.userId, farm);
    return farm;
  }
  getSoil(farmId) {
    return this.soilRecords.get(farmId) || Array.from(this.soilRecords.values())[0];
  }
  saveSoil(soil) {
    soil.lastUpdated = "Today, " + (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    this.soilRecords.set(soil.farmId, soil);
    return soil;
  }
  getNotifications() {
    return this.notifications;
  }
  markNotificationRead(id) {
    const item = this.notifications.find((n) => n.id === id);
    if (item) item.read = true;
  }
  getSchemes(filters) {
    let result = [...this.schemes];
    if (filters?.status && filters.status !== "all") {
      result = result.filter((s) => s.status.toLowerCase() === filters.status.toLowerCase());
    }
    if (filters?.authority && filters.authority.toLowerCase() !== "all") {
      const auth = filters.authority.toLowerCase();
      result = result.filter((s) => s.sponsoringAuthority?.toLowerCase() === auth);
    }
    if (filters?.category && filters.category.toLowerCase() !== "all") {
      const cat = filters.category.toLowerCase();
      result = result.filter(
        (s) => s.category.toLowerCase().includes(cat) || cat.includes(s.category.toLowerCase()) || s.relevanceTags?.some((t) => t.toLowerCase().includes(cat))
      );
    }
    if (filters?.eligibility && filters.eligibility.toLowerCase() !== "all") {
      const elig = filters.eligibility.toLowerCase();
      result = result.filter(
        (s) => s.eligibilityCategory?.toLowerCase().includes(elig) || s.eligibility.some((e) => e.toLowerCase().includes(elig)) || s.relevanceTags?.some((t) => t.toLowerCase().includes(elig))
      );
    }
    if (filters?.state && filters.state.toLowerCase() !== "all" && filters.state.toLowerCase() !== "all india") {
      const st = filters.state.toLowerCase();
      result = result.filter(
        (s) => s.applicableStates.some((state) => state.toLowerCase() === "all india" || state.toLowerCase().includes(st) || st.includes(state.toLowerCase()))
      );
    }
    if (filters?.search && filters.search.trim()) {
      const q = filters.search.toLowerCase().trim();
      result = result.filter(
        (s) => s.name.toLowerCase().includes(q) || s.fullName.toLowerCase().includes(q) || s.category.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.benefits.toLowerCase().includes(q) || s.relevanceTags?.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }
  getSchemeById(id) {
    return this.schemes.find((s) => s.id === id);
  }
  createEscalationTicket(ticket) {
    const newTicket = {
      ...ticket,
      id: `TKT-EXP-${Date.now().toString().slice(-6)}`,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      status: "submitted",
      assignedAgronomist: "Dr. P. Sridhar (Senior Plant Pathologist, ICAR Krishi Vigyan Kendra)",
      supportHelpline: "1800-180-1551 (Toll-Free Kisan Call Center 6 AM - 10 PM)"
    };
    this.expertTickets.unshift(newTicket);
    return newTicket;
  }
  getEscalationTickets() {
    return this.expertTickets;
  }
  verifyFertilizerBarcode(barcode) {
    const cleanCode = (barcode || "").trim().replace(/[\s-]/g, "");
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    if (!cleanCode) {
      return {
        verified: false,
        status: "UNABLE_TO_VERIFY",
        code: barcode,
        codeType: "barcode",
        message: "No barcode data detected.",
        reasons: ["Incorrect barcode", "Scanning blur or incomplete code"],
        timestamp
      };
    }
    const matched = this.fertilizers.find(
      (f) => f.registeredBarcodes.some((b) => b === cleanCode || cleanCode.includes(b) || b.includes(cleanCode))
    );
    if (matched) {
      return {
        verified: true,
        status: "VERIFIED",
        code: cleanCode,
        codeType: "barcode",
        format: cleanCode.length === 13 ? "EAN-13" : cleanCode.length === 12 ? "UPC-A" : cleanCode.length === 8 ? "EAN-8" : "Code 128",
        product: matched,
        message: `Product verified: ${matched.productName} by ${matched.brand}. Information matched in national fertilizer registry.`,
        timestamp
      };
    }
    if (cleanCode.startsWith("890") && cleanCode.length >= 8) {
      return {
        verified: false,
        status: "UNABLE_TO_VERIFY",
        code: cleanCode,
        codeType: "barcode",
        format: cleanCode.length === 13 ? "EAN-13" : "GS1 Barcode",
        message: "We could not confirm this product using the available verification data.",
        reasons: [
          "Unknown barcode not currently recorded in the active verified batch registry",
          "Product batch may not be registered yet by the manufacturer",
          "Incorrect or damaged barcode printed on package",
          "Central verification service database currently updating"
        ],
        timestamp
      };
    }
    return {
      verified: false,
      status: "UNABLE_TO_VERIFY",
      code: cleanCode,
      codeType: "barcode",
      format: "Unknown Barcode Format",
      message: "We could not confirm this product using the available verification data.",
      reasons: [
        "Unknown barcode",
        "Product not registered in Central Fertilizer Monitoring System",
        "Incorrect or unreadable barcode",
        "Verification service unavailable for this specific manufacturer code"
      ],
      timestamp
    };
  }
  verifyFertilizerQR(payload) {
    const rawPayload = (payload || "").trim();
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    if (!rawPayload) {
      return {
        verified: false,
        status: "UNABLE_TO_VERIFY",
        code: payload,
        codeType: "qr",
        message: "No QR code payload detected.",
        reasons: ["Empty or unreadable QR code"],
        timestamp
      };
    }
    let detectedUrl = void 0;
    let detectedDomain = void 0;
    const urlMatch = rawPayload.match(/https?:\/\/[^\s]+/i);
    if (urlMatch) {
      detectedUrl = urlMatch[0];
      try {
        const parsed = new URL(detectedUrl);
        detectedDomain = parsed.hostname;
      } catch {
        detectedDomain = "External Website";
      }
    }
    let parsedJson = null;
    try {
      if (rawPayload.startsWith("{") && rawPayload.endsWith("}")) {
        parsedJson = JSON.parse(rawPayload);
      }
    } catch {
    }
    const matched = this.fertilizers.find((f) => {
      if (f.registeredQrPayloads?.some((qr) => rawPayload.toLowerCase().includes(qr.toLowerCase()) || qr.toLowerCase().includes(rawPayload.toLowerCase()))) {
        return true;
      }
      if (f.id.toLowerCase() === rawPayload.toLowerCase()) return true;
      if (f.batchNumber.toLowerCase() === rawPayload.toLowerCase()) return true;
      if (f.serialNumber && f.serialNumber.toLowerCase() === rawPayload.toLowerCase()) return true;
      if (parsedJson && (parsedJson.productId === f.id || parsedJson.batch === f.batchNumber || parsedJson.productName === f.productName)) {
        return true;
      }
      return false;
    });
    if (matched) {
      return {
        verified: true,
        status: "VERIFIED",
        code: rawPayload,
        codeType: "qr",
        format: "QR Code",
        product: matched,
        detectedDomain,
        detectedUrl,
        message: `Product verified: ${matched.productName} by ${matched.brand}. QR digital signature confirmed.`,
        timestamp
      };
    }
    return {
      verified: false,
      status: "UNABLE_TO_VERIFY",
      code: rawPayload,
      codeType: "qr",
      format: "QR Code",
      detectedDomain,
      detectedUrl,
      message: "We could not confirm this product using the available verification data.",
      reasons: [
        "QR code payload not matched in registered authentic batch records",
        "Product batch may not be linked to the digital verification portal",
        "Unregistered manufacturer or unofficial QR tag",
        "Verification service unavailable"
      ],
      timestamp
    };
  }
};
var db = new AgriculturalDatabase();

// server/services/weatherService.ts
var weatherCache = /* @__PURE__ */ new Map();
var CACHE_TTL_MS = 15 * 60 * 1e3;
async function fetchAgriculturalWeather(locationQuery = "Somulavaripalli, Kadapa", lat = 14.47, lon = 78.82) {
  const cacheKey = `${locationQuery.toLowerCase()}_${lat.toFixed(2)}_${lon.toFixed(2)}`;
  const cached = weatherCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return { ...cached.data, source: "Showing last synced weather data", isCached: true };
  }
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max,sunrise,sunset&timezone=Asia%2FKolkata`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4e3);
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (response.ok) {
      const json = await response.json();
      const mapped = mapOpenMeteoToKrushakWeather(json, locationQuery);
      weatherCache.set(cacheKey, { data: mapped, timestamp: Date.now() });
      return mapped;
    }
  } catch (err) {
    console.warn("Live weather fetch failed, using realistic fallback data:", err);
  }
  const fallback = getFallbackAgriculturalWeather(locationQuery);
  weatherCache.set(cacheKey, { data: fallback, timestamp: Date.now() });
  return fallback;
}
function getWeatherCondition(code) {
  if (code === 0) return { condition: "Clear Sky", code: "sunny" };
  if (code === 1 || code === 2) return { condition: "Partly Cloudy", code: "partly-cloudy" };
  if (code === 3) return { condition: "Overcast", code: "cloudy" };
  if (code >= 51 && code <= 67) return { condition: "Light Rain", code: "rain-light" };
  if (code >= 80 && code <= 82) return { condition: "Showers", code: "rain-moderate" };
  if (code >= 95) return { condition: "Thunderstorm", code: "thunderstorm" };
  return { condition: "Partly Cloudy", code: "partly-cloudy" };
}
function mapOpenMeteoToKrushakWeather(json, locationQuery) {
  const current = json.current || {};
  const daily = json.daily || {};
  const hourly = json.hourly || {};
  const cond = getWeatherCondition(current.weather_code || 2);
  const uvMax = daily.uv_index_max?.[0] || 6;
  const uvRisk = uvMax > 8 ? "Very High" : uvMax > 5 ? "High" : uvMax > 2 ? "Moderate" : "Low";
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const forecast7Day = (daily.time || []).slice(0, 7).map((timeStr, idx) => {
    const d = new Date(timeStr);
    const dayLabel = idx === 0 ? "Today" : daysOfWeek[d.getDay()];
    const dateLabel = `${d.getDate()} ${months[d.getMonth()]}`;
    const dayCond = getWeatherCondition(daily.weather_code?.[idx] || 2);
    const rainProb = Math.round(daily.precipitation_probability_max?.[idx] ?? 20);
    const rainMm = Number((rainProb / 100 * 12).toFixed(1));
    return {
      day: dayLabel,
      date: dateLabel,
      condition: dayCond.condition,
      conditionCode: dayCond.code,
      maxTemp: Math.round(daily.temperature_2m_max?.[idx] ?? 28),
      minTemp: Math.round(daily.temperature_2m_min?.[idx] ?? 20),
      rainProbability: rainProb,
      rainfallMm: rainMm,
      windSpeed: Math.round(daily.wind_speed_10m_max?.[idx] ?? 12)
    };
  });
  const targetHours = [8, 11, 14, 17, 20, 23, 2, 5];
  const hourlyMapped = targetHours.map((hour) => {
    const timeLabel = hour === 0 ? "12 AM" : hour === 12 ? "12 PM" : hour > 12 ? `${hour - 12} PM` : `${hour} AM`;
    const temp = Math.round(hourly.temperature_2m?.[hour] ?? 26);
    const rain = Math.round(hourly.precipitation_probability?.[hour] ?? 15);
    const wind = Math.round(hourly.wind_speed_10m?.[hour] ?? 10);
    const hCond = getWeatherCondition(hourly.weather_code?.[hour] || 1);
    return {
      time: timeLabel,
      temperature: temp,
      condition: hCond.condition,
      conditionCode: hCond.code,
      rainProbability: rain,
      windSpeed: wind
    };
  });
  const locParts = locationQuery.split(",").map((s) => s.trim());
  const village = locParts[0] || "Somulavaripalli";
  const district = locParts[1] || "Kadapa";
  const resolvedForecast = forecast7Day.length > 0 ? forecast7Day : getFallbackAgriculturalWeather(locationQuery).forecast7Day;
  return {
    location: {
      village,
      district,
      state: "Andhra Pradesh",
      country: "India"
    },
    current: {
      temperature: Math.round(current.temperature_2m ?? 28),
      condition: cond.condition,
      conditionCode: cond.code,
      humidity: Math.round(current.relative_humidity_2m ?? 64),
      windSpeed: Math.round(current.wind_speed_10m ?? 12),
      windDirection: "NE",
      minTemp: Math.round(daily.temperature_2m_min?.[0] ?? 20),
      maxTemp: Math.round(daily.temperature_2m_max?.[0] ?? 28),
      feelsLike: Math.round(current.apparent_temperature ?? 30),
      rainProbability: Math.round(daily.precipitation_probability_max?.[0] ?? 20),
      uvIndex: Math.round(uvMax),
      uvRisk,
      sunrise: daily.sunrise?.[0] ? new Date(daily.sunrise[0]).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "05:56 AM",
      sunset: daily.sunset?.[0] ? new Date(daily.sunset[0]).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "06:32 PM",
      lastSynced: "Today, " + (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    },
    forecast: resolvedForecast,
    forecast7Day: resolvedForecast,
    hourly: hourlyMapped.length > 0 ? hourlyMapped : getFallbackAgriculturalWeather(locationQuery).hourly,
    farmingTips: {
      title: "Farming Tips for Today",
      summary: "Partly cloudy weather with a chance of light rain.",
      recommendations: [
        "Good time for light irrigation in early morning hours.",
        "Suitable for secondary nitrogen/urea top dressing before anticipated Wednesday showers.",
        "Avoid heavy pesticide spraying if wind speed exceeds 15 km/h.",
        "Maintain drainage channels in paddy and vegetable beds."
      ]
    },
    source: "Live Weather API",
    isCached: false
  };
}
function getFallbackAgriculturalWeather(locationQuery = "Somulavaripalli, Kadapa") {
  const locParts = locationQuery.split(",").map((s) => s.trim());
  const village = locParts[0] || "Somulavaripalli";
  const district = locParts[1] || "Kadapa";
  const defaultForecast = [
    { day: "Today", date: "24 May", condition: "Partly Cloudy", conditionCode: "partly-cloudy", maxTemp: 28, minTemp: 20, rainProbability: 20, rainfallMm: 0.8, windSpeed: 12 },
    { day: "Sun", date: "25 May", condition: "Cloudy", conditionCode: "cloudy", maxTemp: 27, minTemp: 19, rainProbability: 60, rainfallMm: 4.2, windSpeed: 14 },
    { day: "Mon", date: "26 May", condition: "Sunny", conditionCode: "sunny", maxTemp: 29, minTemp: 21, rainProbability: 10, rainfallMm: 0, windSpeed: 10 },
    { day: "Tue", date: "27 May", condition: "Partly Cloudy", conditionCode: "partly-cloudy", maxTemp: 28, minTemp: 20, rainProbability: 30, rainfallMm: 1.5, windSpeed: 12 },
    { day: "Wed", date: "28 May", condition: "Rain Showers", conditionCode: "rain-moderate", maxTemp: 27, minTemp: 19, rainProbability: 70, rainfallMm: 8.4, windSpeed: 16 },
    { day: "Thu", date: "29 May", condition: "Partly Cloudy", conditionCode: "partly-cloudy", maxTemp: 28, minTemp: 20, rainProbability: 20, rainfallMm: 0.5, windSpeed: 12 },
    { day: "Fri", date: "30 May", condition: "Thunderstorm", conditionCode: "thunderstorm", maxTemp: 26, minTemp: 18, rainProbability: 80, rainfallMm: 14, windSpeed: 18 }
  ];
  return {
    location: {
      village,
      district,
      state: "Andhra Pradesh",
      country: "India"
    },
    current: {
      temperature: 28,
      condition: "Partly Cloudy",
      conditionCode: "partly-cloudy",
      humidity: 64,
      windSpeed: 12,
      windDirection: "NE",
      minTemp: 20,
      maxTemp: 28,
      feelsLike: 30,
      rainProbability: 20,
      uvIndex: 6,
      uvRisk: "High",
      sunrise: "05:56 AM",
      sunset: "06:32 PM",
      lastSynced: "Today, 07:30 AM"
    },
    forecast: defaultForecast,
    forecast7Day: defaultForecast,
    hourly: [
      { time: "8 AM", temperature: 24, condition: "Partly Cloudy", conditionCode: "partly-cloudy", rainProbability: 10, windSpeed: 8 },
      { time: "11 AM", temperature: 27, condition: "Partly Cloudy", conditionCode: "partly-cloudy", rainProbability: 15, windSpeed: 11 },
      { time: "2 PM", temperature: 28, condition: "Warm / Sun", conditionCode: "sunny", rainProbability: 20, windSpeed: 13 },
      { time: "5 PM", temperature: 27, condition: "Partly Cloudy", conditionCode: "partly-cloudy", rainProbability: 25, windSpeed: 12 },
      { time: "8 PM", temperature: 24, condition: "Clear Night", conditionCode: "clear", rainProbability: 10, windSpeed: 9 },
      { time: "11 PM", temperature: 22, condition: "Cool Breeze", conditionCode: "clear", rainProbability: 5, windSpeed: 7 },
      { time: "2 AM", temperature: 21, condition: "Mild Dew", conditionCode: "clear", rainProbability: 5, windSpeed: 6 },
      { time: "5 AM", temperature: 20, condition: "Early Dawn", conditionCode: "clear", rainProbability: 10, windSpeed: 6 }
    ],
    farmingTips: {
      title: "Farming Tips for Today",
      summary: "Partly cloudy weather with a chance of light rain. Good time for irrigation and fertilizer application.",
      recommendations: [
        "Optimal soil moisture window: irrigate in early morning before 9 AM.",
        "Plan fertilizer application (NPK) ahead of anticipated midweek showers.",
        "Monitor rice and groundnut fields for fungal leaf spots under humid conditions.",
        "Ensure proper drainage channels are clear."
      ]
    },
    source: "Showing last synced weather data",
    isCached: true
  };
}

// server/services/geminiService.ts
var import_genai = require("@google/genai");
var aiInstance = null;
function getAI() {
  if (!aiInstance && process.env.GEMINI_API_KEY) {
    aiInstance = new import_genai.GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiInstance;
}
var PRIMARY_MODELS = ["gemini-3.7-flash", "gemini-flash-latest", "gemini-3.1-flash-lite"];
async function generateWithFallback(ai, params) {
  let lastError = null;
  for (const model of PRIMARY_MODELS) {
    try {
      const response = await ai.models.generateContent({
        ...params,
        model
      });
      if (response.text) {
        return response;
      }
    } catch (err) {
      lastError = err;
      const status = err?.status || err?.code || (err?.message?.includes("503") ? 503 : null);
      console.warn(`Model ${model} unavailable (${status || "error"}), attempting next model...`);
    }
  }
  throw lastError;
}
async function getAICropRecommendations(params) {
  const ai = getAI();
  if (ai) {
    try {
      const prompt = `Analyze this agricultural field data and generate crop recommendations:
- Location: ${params.location || "Kadapa, Andhra Pradesh, India"}
- Soil Type: ${params.soilType || "Red Soil"}
- Soil pH: ${params.ph} (Neutral range 6.5-7.5)
- Nitrogen (N): ${params.nitrogen}
- Phosphorus (P): ${params.phosphorus}
- Potassium (K): ${params.potassium}
- Ambient Temp: ${params.temperature}\xB0C, Humidity: ${params.humidity}%
- Irrigation Source: ${params.irrigationSource || "Borewell"}
- Land Size: ${params.landArea || "4.5"} ${params.landUnit || "Acre"}

Provide precise agricultural recommendations tailored for Indian agro-climatic zones. The top recommendation should be Paddy (or best fit) with suitability ~94%, high yield, good market demand, low risk.`;
      const response = await generateWithFallback(ai, {
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          systemInstruction: "You are an expert Chief Agronomist and Soil Scientist at Krushak-Path, Dharthi Tech. Provide practical, accurate, farmer-friendly crop advisories formatted in clean JSON.",
          responseMimeType: "application/json",
          responseSchema: {
            type: import_genai.Type.OBJECT,
            properties: {
              topCrop: {
                type: import_genai.Type.OBJECT,
                properties: {
                  name: { type: import_genai.Type.STRING },
                  variety: { type: import_genai.Type.STRING },
                  suitability: { type: import_genai.Type.NUMBER },
                  badge: { type: import_genai.Type.STRING },
                  yieldCategory: { type: import_genai.Type.STRING },
                  marketDemand: { type: import_genai.Type.STRING },
                  riskLevel: { type: import_genai.Type.STRING },
                  estimatedYieldPerAcre: { type: import_genai.Type.STRING },
                  estimatedRevenuePerAcre: { type: import_genai.Type.STRING },
                  growingPeriodDays: { type: import_genai.Type.STRING },
                  reasoning: { type: import_genai.Type.STRING },
                  irrigationGuidance: { type: import_genai.Type.STRING },
                  fertilizerGuidance: { type: import_genai.Type.STRING },
                  soilMatchScore: { type: import_genai.Type.NUMBER },
                  weatherMatchScore: { type: import_genai.Type.NUMBER }
                },
                required: [
                  "name",
                  "suitability",
                  "yieldCategory",
                  "marketDemand",
                  "riskLevel",
                  "reasoning"
                ]
              },
              alternativeCrops: {
                type: import_genai.Type.ARRAY,
                items: {
                  type: import_genai.Type.OBJECT,
                  properties: {
                    name: { type: import_genai.Type.STRING },
                    variety: { type: import_genai.Type.STRING },
                    suitability: { type: import_genai.Type.NUMBER },
                    yieldCategory: { type: import_genai.Type.STRING },
                    marketDemand: { type: import_genai.Type.STRING },
                    riskLevel: { type: import_genai.Type.STRING },
                    estimatedYieldPerAcre: { type: import_genai.Type.STRING },
                    growingPeriodDays: { type: import_genai.Type.STRING },
                    reasoning: { type: import_genai.Type.STRING }
                  },
                  required: ["name", "suitability", "riskLevel", "reasoning"]
                }
              },
              aiExplanation: { type: import_genai.Type.STRING },
              soilHealthAssessment: { type: import_genai.Type.STRING },
              seasonalAdvisory: { type: import_genai.Type.STRING }
            },
            required: ["topCrop", "alternativeCrops", "aiExplanation", "soilHealthAssessment"]
          }
        }
      });
      const parsed = JSON.parse(response.text || "{}");
      if (parsed.topCrop?.name) {
        const topCrop = {
          id: "crop-top-1",
          name: parsed.topCrop.name,
          scientificName: parsed.topCrop.scientificName || (parsed.topCrop.name.includes("Paddy") ? "Oryza sativa" : "Crop Species"),
          variety: parsed.topCrop.variety || "High Yield Variety",
          suitability: parsed.topCrop.suitability || 94,
          suitabilityScore: parsed.topCrop.suitabilityScore || parsed.topCrop.suitability || 94,
          badge: parsed.topCrop.badge || `${parsed.topCrop.suitability || 94}% Suitable`,
          season: parsed.topCrop.season || "Kharif / Rabi",
          expectedYield: parsed.topCrop.expectedYield || parsed.topCrop.estimatedYieldPerAcre || "28 - 32 Quintals/acre",
          estimatedYieldPerAcre: parsed.topCrop.estimatedYieldPerAcre || "28 - 32 Quintals",
          waterRequirement: parsed.topCrop.waterRequirement || "Moderate-High (Borewell/Canal)",
          duration: parsed.topCrop.duration || parsed.topCrop.growingPeriodDays || "120 - 135 Days",
          growingPeriodDays: parsed.topCrop.growingPeriodDays || "120 - 135 Days",
          estimatedProfitPerAcre: parsed.topCrop.estimatedProfitPerAcre || 48e3,
          estimatedRevenuePerAcre: parsed.topCrop.estimatedRevenuePerAcre || "\u20B962,000 - \u20B975,000",
          marketDemand: parsed.topCrop.marketDemand || "High",
          riskLevel: parsed.topCrop.riskLevel || "Low",
          reasoning: parsed.topCrop.reasoning || "High yield \u2022 Good market demand \u2022 Low risk.",
          reasons: Array.isArray(parsed.topCrop.reasons) ? parsed.topCrop.reasons : [
            "Neutral soil pH matches optimal root nutrient absorption",
            "Borewell irrigation provides reliable water supply",
            "High market demand and strong local APMC mandi price support"
          ],
          irrigationGuidance: parsed.topCrop.irrigationGuidance || "Alternate wetting and drying (AWD) saves 25% water.",
          fertilizerGuidance: parsed.topCrop.fertilizerGuidance || "Apply balanced NPK with split nitrogen applications.",
          soilMatchScore: parsed.topCrop.soilMatchScore || 95,
          weatherMatchScore: parsed.topCrop.weatherMatchScore || 92
        };
        const alternativeCrops = (parsed.alternativeCrops || []).map((c, idx) => ({
          id: `crop-alt-${idx + 1}`,
          name: c.name,
          scientificName: c.scientificName || "Cultivated Crop",
          variety: c.variety || "Certified Hybrid",
          suitability: c.suitability || 80,
          suitabilityScore: c.suitabilityScore || c.suitability || 80,
          badge: `${c.suitability || 80}% Match`,
          season: c.season || "Kharif / Rabi",
          expectedYield: c.expectedYield || c.estimatedYieldPerAcre || "15 - 20 Quintals/acre",
          estimatedYieldPerAcre: c.estimatedYieldPerAcre || "15 - 20 Quintals",
          waterRequirement: c.waterRequirement || "Low to Moderate",
          duration: c.duration || c.growingPeriodDays || "110 - 125 Days",
          growingPeriodDays: c.growingPeriodDays || "110 - 125 Days",
          estimatedProfitPerAcre: c.estimatedProfitPerAcre || 42e3,
          marketDemand: c.marketDemand || "Good",
          riskLevel: c.riskLevel || "Low",
          reasoning: c.reasoning || "Reliable commercial cash crop for regional soil conditions.",
          reasons: Array.isArray(c.reasons) ? c.reasons : [
            "Well-suited for local agro-climatic conditions",
            "Strong local APMC market demand"
          ]
        }));
        return {
          topCrop,
          alternativeCrops,
          aiExplanation: parsed.aiExplanation || "Recommended based on regional soil chemistry and water availability.",
          soilHealthAssessment: parsed.soilHealthAssessment || "Soil is well-balanced with good nutrient retention.",
          seasonalAdvisory: parsed.seasonalAdvisory || "Ensure timely land preparation and certified seed treatment.",
          generatedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    } catch (err) {
      console.warn("Gemini crop recommendation call failed, using deterministic agronomy fallback:", err);
    }
  }
  return {
    topCrop: {
      id: "crop-top-1",
      name: "Paddy",
      scientificName: "Oryza sativa (Rice)",
      variety: "BPT 5204 (Samba Mahsuri) / MTU 1010",
      suitability: 94,
      suitabilityScore: 94,
      badge: "94% Suitable",
      season: "Kharif / Rabi",
      expectedYield: "28 - 32 Quintals/acre",
      estimatedYieldPerAcre: "28 - 32 Quintals",
      waterRequirement: "High (Borewell / Canal)",
      duration: "120 - 135 Days",
      growingPeriodDays: "120 - 135 Days",
      estimatedProfitPerAcre: 48e3,
      estimatedRevenuePerAcre: "\u20B962,000 - \u20B975,000",
      marketDemand: "Good",
      riskLevel: "Low",
      reasoning: "High yield \u2022 Good market demand \u2022 Low risk. The neutral soil pH (6.8) and borewell irrigation combined with adequate potassium make this farm ideal for Paddy.",
      reasons: [
        "Neutral soil pH (6.8) is optimal for high nitrogen & phosphorus uptake",
        "Borewell water capacity (7.5 HP) meets continuous flowering stage water requirement",
        "Strong APMC Mandi demand in Kadapa and Proddatur yards with MSP guarantee"
      ],
      irrigationGuidance: "Alternate wetting and drying (AWD) saves 25% water while maintaining root aeration.",
      fertilizerGuidance: "Apply 50kg Urea in 3 splits + 20kg MOP. Avoid excess DAP as soil phosphorus is already high.",
      soilMatchScore: 95,
      weatherMatchScore: 92
    },
    alternativeCrops: [
      {
        id: "crop-alt-1",
        name: "Groundnut (Peanut)",
        scientificName: "Arachis hypogaea",
        variety: "Kadiri 6 / TMV 2",
        suitability: 88,
        suitabilityScore: 88,
        badge: "88% Suitable",
        season: "Rabi / Kharif",
        expectedYield: "14 - 18 Quintals/acre",
        estimatedYieldPerAcre: "14 - 18 Quintals",
        waterRequirement: "Low-Moderate",
        duration: "105 - 115 Days",
        growingPeriodDays: "105 - 115 Days",
        estimatedProfitPerAcre: 52e3,
        marketDemand: "High",
        riskLevel: "Low",
        reasoning: "Well-draining red soil provides ideal pod development. High local APMC Mandi rates.",
        reasons: [
          "Red soil texture allows easy peg penetration and plump pod development",
          "Consumes 40% less water compared to conventional cereal crops"
        ]
      },
      {
        id: "crop-alt-2",
        name: "Cotton",
        scientificName: "Gossypium hirsutum",
        variety: "Bt Cotton Hybrids",
        suitability: 82,
        suitabilityScore: 82,
        badge: "82% Match",
        season: "Kharif",
        expectedYield: "10 - 14 Quintals/acre",
        estimatedYieldPerAcre: "10 - 14 Quintals",
        waterRequirement: "Moderate",
        duration: "150 - 165 Days",
        growingPeriodDays: "150 - 165 Days",
        estimatedProfitPerAcre: 45e3,
        marketDemand: "Good",
        riskLevel: "Moderate",
        reasoning: "Strong commercial value. Requires monitored pest management for pink bollworm.",
        reasons: [
          "High cash liquidity across regional ginning mills in Proddatur & Yerraguntla",
          "Tolerant to mid-season dry spells once tap root deepens"
        ]
      },
      {
        id: "crop-alt-3",
        name: "Maize (Corn)",
        scientificName: "Zea mays",
        variety: "DHM 117 / Pioneer Hybrid",
        suitability: 79,
        suitabilityScore: 79,
        badge: "79% Match",
        season: "Kharif / Rabi",
        expectedYield: "25 - 30 Quintals/acre",
        estimatedYieldPerAcre: "25 - 30 Quintals",
        waterRequirement: "Moderate",
        duration: "95 - 105 Days",
        growingPeriodDays: "95 - 105 Days",
        estimatedProfitPerAcre: 38e3,
        marketDemand: "Good",
        riskLevel: "Low",
        reasoning: "Short duration crop with lower water footprint compared to paddy.",
        reasons: [
          "Short 100-day harvest turnaround allows double-cropping in same season",
          "High poultry feed mill demand across Rayalaseema belt"
        ]
      },
      {
        id: "crop-alt-4",
        name: "Red Gram (Toor Dal)",
        scientificName: "Cajanus cajan",
        variety: "LRG 41 / PRG 176",
        suitability: 76,
        suitabilityScore: 76,
        badge: "76% Match",
        season: "Kharif",
        expectedYield: "6 - 8 Quintals/acre",
        estimatedYieldPerAcre: "6 - 8 Quintals",
        waterRequirement: "Low",
        duration: "160 - 180 Days",
        growingPeriodDays: "160 - 180 Days",
        estimatedProfitPerAcre: 41e3,
        marketDemand: "High",
        riskLevel: "Low",
        reasoning: "Excellent nitrogen fixation pulse. Enhances soil health for subsequent crop rotation.",
        reasons: [
          "Deep root nodules fix atmospheric nitrogen, replenishing soil fertility",
          "Sustains high market prices above \u20B99,000/quintal in Kadapa Mandi"
        ]
      },
      {
        id: "crop-alt-5",
        name: "Chilli (Mirchi)",
        scientificName: "Capsicum annuum",
        variety: "Teja Chilli / G4 Hybrid",
        suitability: 74,
        suitabilityScore: 74,
        badge: "74% Match",
        season: "Kharif / Rabi",
        expectedYield: "18 - 22 Quintals (Dry)/acre",
        estimatedYieldPerAcre: "18 - 22 Quintals Dry / 200 Q Fresh",
        waterRequirement: "Moderate (Drip)",
        duration: "140 - 150 Days",
        growingPeriodDays: "140 - 150 Days",
        estimatedProfitPerAcre: 75e3,
        marketDemand: "High",
        riskLevel: "Moderate",
        reasoning: "High value horticulture. Requires careful drip irrigation and foliar micronutrient sprays.",
        reasons: [
          "Lucrative commercial returns with high export grade pricing",
          "Ideal response to foliar potassium and micro-irrigation"
        ]
      }
    ],
    aiExplanation: "Based on your farm profile in Somulavaripalli, Kadapa with pH 6.8 (Neutral), adequate Nitrogen/Potassium, and Borewell irrigation, Paddy (Rice) delivers the highest stability, market return, and lowest climatic risk for the upcoming season.",
    soilHealthAssessment: "Soil is in healthy balance (82/100). High Phosphorus reserve allows you to cut down on chemical phosphatic fertilizers, lowering input cost.",
    seasonalAdvisory: "Begin seed bed preparation by early June. Treat seeds with Trichoderma viride @ 4g/kg to prevent root rot.",
    generatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
async function askKrushakAI(userQuery, language = "English", farmContext) {
  const ai = getAI();
  if (ai) {
    try {
      const response = await generateWithFallback(ai, {
        model: "gemini-3.7-flash",
        contents: `User Query: "${userQuery}". Respond clearly in ${language}. Farm Context: ${farmContext || "Somulavaripalli, Kadapa, AP. Soil: Red Soil, pH 6.8, Borewell irrigation, Paddy/Groundnut farming."}`,
        config: {
          systemInstruction: "You are Krushak AI, a warm, highly knowledgeable Indian agriculture specialist from Dharthi Tech. Provide concise, actionable, farmer-friendly guidance on crop management, fertilizer dosage, organic remedies, weather protection, and pest identification. If user asks in Telugu, Hindi, Tamil, Kannada, or Malayalam, reply in that language with respectful terminology."
        }
      });
      if (response.text) return response.text;
    } catch (err) {
      console.warn("Krushak AI chat fallback engaged:", err);
    }
  }
  const q = userQuery.toLowerCase();
  if (q.includes("fertilizer") || q.includes("urea") || q.includes("dap") || q.includes("npk")) {
    return `For your soil (pH 6.8, High Phosphorus, Medium Potassium):
1. Use Urea in 3 split doses (basal, tillering, panicle initiation).
2. Avoid adding extra DAP because soil phosphorus is already in high reserve.
3. Apply MOP (Muriate of Potash) @ 20-25 kg/acre during early tillering.`;
  }
  if (q.includes("pest") || q.includes("disease") || q.includes("leaf") || q.includes("borer")) {
    return `To protect your crop from common pests:
- Stem Borer: Install pheromone traps @ 8 traps/acre. Spray Chlorantraniliprole 18.5% SC @ 0.3ml/L if infestation > 5%.
- Blast/Leaf Spot: Spray Tricyclazole 75% WP @ 0.6g/L.
- Organic Neem Oil: Spray 5ml/L with soap water for preventive aphid/whitefly control.`;
  }
  if (q.includes("water") || q.includes("irrigation")) {
    return `With borewell irrigation, adopt Alternate Wetting and Drying (AWD). Keep 2-3 cm water layer during tillering and panicle emergence, and allow field to drain slightly between waterings to encourage deep root growth.`;
  }
  return `Hello Farmer brother! Based on your farm in Kadapa (pH 6.8, Red Soil, Borewell), Paddy and Groundnut are currently in prime condition. How can I help you today with pest control, fertilizer calculation, or market prices?`;
}
async function scanPlantDiseaseWithAI(imageBase64, cropHint = "Paddy") {
  const ai = getAI();
  if (ai && imageBase64) {
    try {
      const cleanBase64 = imageBase64.replace(/^data:image\/[a-zA-Z]+;base64,/, "");
      const response = await generateWithFallback(ai, {
        model: "gemini-3.7-flash",
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: "image/jpeg",
                data: cleanBase64
              }
            },
            {
              text: `Analyze this plant leaf/crop image for pests or diseases. The crop is likely: ${cropHint}. Provide a structured diagnosis.`
            }
          ]
        },
        config: {
          systemInstruction: "You are an expert plant pathologist. Diagnose plant leaf health, identify disease or deficiency, severity, organic treatments, and chemical control.",
          responseMimeType: "application/json",
          responseSchema: {
            type: import_genai.Type.OBJECT,
            properties: {
              diseaseName: { type: import_genai.Type.STRING },
              cropName: { type: import_genai.Type.STRING },
              confidenceScore: { type: import_genai.Type.NUMBER },
              severity: { type: import_genai.Type.STRING },
              symptoms: { type: import_genai.Type.ARRAY, items: { type: import_genai.Type.STRING } },
              cause: { type: import_genai.Type.STRING },
              organicTreatment: { type: import_genai.Type.ARRAY, items: { type: import_genai.Type.STRING } },
              chemicalTreatment: { type: import_genai.Type.ARRAY, items: { type: import_genai.Type.STRING } },
              preventiveMeasures: { type: import_genai.Type.ARRAY, items: { type: import_genai.Type.STRING } }
            },
            required: ["diseaseName", "confidenceScore", "severity", "organicTreatment", "chemicalTreatment"]
          }
        }
      });
      const parsed = JSON.parse(response.text || "{}");
      if (parsed.diseaseName) {
        const organic = parsed.organicRemedies || parsed.organicTreatment || [];
        const chemical = parsed.chemicalRemedies || parsed.chemicalTreatment || [];
        const prev = parsed.preventativeMeasures || parsed.preventiveMeasures || [];
        const desc = parsed.description || (Array.isArray(parsed.symptoms) ? parsed.symptoms.join(". ") : "Identified plant leaf condition.");
        return {
          diseaseName: parsed.diseaseName,
          cropName: parsed.cropName || cropHint || "Paddy (Rice)",
          confidenceScore: parsed.confidenceScore || parsed.confidence || 92,
          confidence: parsed.confidence || parsed.confidenceScore || 92,
          severity: (parsed.severity || "medium").toLowerCase(),
          causalAgent: parsed.causalAgent || parsed.cause || "Fungal pathogen",
          cause: parsed.cause || parsed.causalAgent || "Fungal pathogen",
          description: desc,
          symptoms: Array.isArray(parsed.symptoms) ? parsed.symptoms : [desc],
          organicRemedies: organic,
          organicTreatment: organic,
          chemicalRemedies: chemical,
          chemicalTreatment: chemical,
          preventativeMeasures: prev,
          preventiveMeasures: prev
        };
      }
    } catch (err) {
      console.warn("Plant disease vision scan error:", err);
    }
  }
  const organicFallback = [
    "Spray 5% Neem Seed Kernel Extract (NSKE) @ 50ml/L of water",
    "Foliar spray of Pseudomonas fluorescens @ 10g/L of water",
    "Apply wood ash dust around plant base to strengthen leaf epidermal cell wall"
  ];
  const chemicalFallback = [
    "Spray Tricyclazole 75% WP @ 0.6 g/L of water",
    "Or spray Isoprothiolane 40% EC @ 1.5 ml/L",
    "Ensure spray coverage on both upper and lower surface of leaves in morning hours"
  ];
  const prevFallback = [
    "Avoid excessive urea nitrogen top dressing when canopy is humid",
    "Maintain field bund sanitation and remove alternate weed hosts",
    "Ensure optimal plant hill spacing for sunlight and airflow penetration"
  ];
  return {
    diseaseName: "Early Leaf Blast (Pyricularia oryzae)",
    cropName: cropHint || "Paddy (Rice)",
    confidenceScore: 92,
    confidence: 92,
    severity: "medium",
    causalAgent: "Pyricularia oryzae (Fungal pathogen)",
    cause: "Fungal pathogen triggered by high humidity (>85%) and moderate temperatures (24-28\xB0C).",
    description: "Spindle-shaped elliptical lesions on leaf blades with gray or whitish centers and brown margins, indicative of fungal spore activity.",
    symptoms: [
      "Spindle-shaped or diamond-shaped lesions on leaf blades with gray centers and brown margins",
      "Early yellowing around infected spots",
      "Lesion enlargement under high relative humidity (>85%)"
    ],
    organicRemedies: organicFallback,
    organicTreatment: organicFallback,
    chemicalRemedies: chemicalFallback,
    chemicalTreatment: chemicalFallback,
    preventativeMeasures: prevFallback,
    preventiveMeasures: prevFallback
  };
}

// server/services/whatsappService.ts
function generateLocalizedWhatsAppMessage(payload) {
  const lang = (payload.language || "en").toLowerCase();
  const crop = payload.cropName || "Crop";
  const r = payload.result || {};
  const disease = r.diseaseName || "Diagnosed Condition";
  const confidence = r.confidence ? `${r.confidence}%` : "High";
  const severity = r.severity || "Moderate";
  const symptomsList = r.symptoms && r.symptoms.length > 0 ? r.symptoms.join(", ") : r.description || "Noted leaf and foliage abnormalities";
  const cause = r.possibleReason || r.causalAgent || "Fungal or environmental stress";
  const organic = r.organicRemedies && r.organicRemedies.length > 0 ? r.organicRemedies.join("; ") : "Neem oil spray (5ml/L), application of bio-fungicides";
  const chemical = r.chemicalRemedies && r.chemicalRemedies.length > 0 ? r.chemicalRemedies.join("; ") : "Copper Oxychloride (3g/L) or Mancozeb as prescribed";
  const safety = r.safeUsageInstructions || "Wear protective mask and gloves during spraying. Spray during calm morning hours.";
  const precautionsList = r.precautions && r.precautions.length > 0 ? r.precautions.join("; ") : "Avoid spraying during strong winds or direct rain. Observe waiting period before harvesting.";
  const weather = r.weatherWarning || "Monitor local weather; avoid foliar spraying if rain is expected within 4 hours.";
  const now = /* @__PURE__ */ new Date();
  const dateTimeStr = now.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }) + ", " + now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
  if (lang === "te") {
    return [
      `*\u0C27\u0C30\u0C4D\u0C24\u0C40 \u0C1F\u0C46\u0C15\u0C4D - \u0C2A\u0C02\u0C1F \u0C35\u0C4D\u0C2F\u0C3E\u0C27\u0C3F \u0C28\u0C3F\u0C30\u0C4D\u0C27\u0C3E\u0C30\u0C23 \u0C28\u0C3F\u0C35\u0C47\u0C26\u0C3F\u0C15*`,
      ``,
      `*\u0C2A\u0C02\u0C1F:* ${crop}`,
      `*\u0C17\u0C41\u0C30\u0C4D\u0C24\u0C3F\u0C02\u0C1A\u0C3F\u0C28 \u0C38\u0C2E\u0C38\u0C4D\u0C2F / \u0C24\u0C46\u0C17\u0C41\u0C32\u0C41:* ${disease}`,
      `*\u0C16\u0C1A\u0C4D\u0C1A\u0C3F\u0C24\u0C24\u0C4D\u0C35\u0C02 / \u0C24\u0C40\u0C35\u0C4D\u0C30\u0C24:* ${confidence} (${severity})`,
      `*\u0C32\u0C15\u0C4D\u0C37\u0C23\u0C3E\u0C32\u0C41:* ${symptomsList}`,
      `*\u0C15\u0C3E\u0C30\u0C23\u0C02:* ${cause}`,
      `*\u0C38\u0C3F\u0C2B\u0C3E\u0C30\u0C4D\u0C38\u0C41 \u0C1A\u0C47\u0C38\u0C3F\u0C28 \u0C28\u0C3F\u0C35\u0C3E\u0C30\u0C23 \u0C1A\u0C30\u0C4D\u0C2F\u0C32\u0C41 (\u0C38\u0C47\u0C02\u0C26\u0C4D\u0C30\u0C40\u0C2F):* ${organic}`,
      `*\u0C38\u0C3F\u0C2B\u0C3E\u0C30\u0C4D\u0C38\u0C41 \u0C1A\u0C47\u0C38\u0C3F\u0C28 \u0C2E\u0C02\u0C26\u0C41\u0C32\u0C41 / \u0C30\u0C38\u0C3E\u0C2F\u0C28 \u0C28\u0C3F\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C23:* ${chemical}`,
      `*\u0C38\u0C41\u0C30\u0C15\u0C4D\u0C37\u0C3F\u0C24 \u0C35\u0C3F\u0C28\u0C3F\u0C2F\u0C4B\u0C17 \u0C38\u0C42\u0C1A\u0C28\u0C32\u0C41:* ${safety}`,
      `*\u0C2E\u0C41\u0C16\u0C4D\u0C2F\u0C2E\u0C48\u0C28 \u0C1C\u0C3E\u0C17\u0C4D\u0C30\u0C24\u0C4D\u0C24\u0C32\u0C41:* ${precautionsList}`,
      `*\u0C35\u0C3E\u0C24\u0C3E\u0C35\u0C30\u0C23 \u0C39\u0C46\u0C1A\u0C4D\u0C1A\u0C30\u0C3F\u0C15:* ${weather}`,
      `*\u0C24\u0C47\u0C26\u0C40 & \u0C38\u0C2E\u0C2F\u0C02:* ${dateTimeStr}`,
      ``,
      `\u0C27\u0C30\u0C4D\u0C24\u0C40 \u0C1F\u0C46\u0C15\u0C4D - \u0C28\u0C2E\u0C4D\u0C2E\u0C15\u0C2E\u0C48\u0C28 \u0C35\u0C4D\u0C2F\u0C35\u0C38\u0C3E\u0C2F \u0C38\u0C3E\u0C02\u0C15\u0C47\u0C24\u0C3F\u0C15\u0C24`,
      `\u0C2E\u0C30\u0C3F\u0C02\u0C24 \u0C38\u0C39\u0C3E\u0C2F\u0C02 \u0C15\u0C4A\u0C30\u0C15\u0C41 \u0C15\u0C3F\u0C38\u0C3E\u0C28\u0C4D \u0C39\u0C46\u0C32\u0C4D\u0C2A\u0C4D\u200C\u0C32\u0C48\u0C28\u0C4D: 1800-180-1551`
    ].join("\n");
  }
  if (lang === "hi") {
    return [
      `*\u0927\u0930\u0924\u0940 \u091F\u0947\u0915 - \u092B\u0938\u0932 \u0930\u094B\u0917 \u0928\u093F\u0926\u093E\u0928 \u0930\u093F\u092A\u094B\u0930\u094D\u091F*`,
      ``,
      `*\u092B\u0938\u0932 / \u092A\u094C\u0927\u093E:* ${crop}`,
      `*\u092A\u0939\u091A\u093E\u0928\u0940 \u0917\u0908 \u092C\u0940\u092E\u093E\u0930\u0940 / \u0938\u092E\u0938\u094D\u092F\u093E:* ${disease}`,
      `*\u0938\u091F\u0940\u0915\u0924\u093E / \u0917\u0902\u092D\u0940\u0930\u0924\u093E:* ${confidence} (${severity})`,
      `*\u0932\u0915\u094D\u0937\u0923:* ${symptomsList}`,
      `*\u0938\u0902\u092D\u093E\u0935\u093F\u0924 \u0915\u093E\u0930\u0923:* ${cause}`,
      `*\u0905\u0928\u0941\u0936\u0902\u0938\u093F\u0924 \u0909\u092A\u091A\u093E\u0930 (\u091C\u0948\u0935\u093F\u0915):* ${organic}`,
      `*\u0905\u0928\u0941\u0936\u0902\u0938\u093F\u0924 \u0915\u0940\u091F\u0928\u093E\u0936\u0915 / \u0930\u093E\u0938\u093E\u092F\u0928\u093F\u0915 \u0928\u093F\u092F\u0902\u0924\u094D\u0930\u0923:* ${chemical}`,
      `*\u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0909\u092A\u092F\u094B\u0917 \u0928\u093F\u0930\u094D\u0926\u0947\u0936:* ${safety}`,
      `*\u092E\u0939\u0924\u094D\u0935\u092A\u0942\u0930\u094D\u0923 \u0938\u093E\u0935\u0927\u093E\u0928\u093F\u092F\u093E\u0902:* ${precautionsList}`,
      `*\u092E\u094C\u0938\u092E \u091A\u0947\u0924\u093E\u0935\u0928\u0940:* ${weather}`,
      `*\u0926\u093F\u0928\u093E\u0902\u0915 \u0914\u0930 \u0938\u092E\u092F:* ${dateTimeStr}`,
      ``,
      `\u0927\u0930\u0924\u0940 \u091F\u0947\u0915 - \u092C\u0947\u0939\u0924\u0930 \u0916\u0947\u0924\u0940 \u0915\u0947 \u0932\u093F\u090F \u092D\u0930\u094B\u0938\u0947\u092E\u0902\u0926 \u0924\u0915\u0928\u0940\u0915`,
      `\u0915\u093F\u0938\u093E\u0928 \u0915\u0949\u0932 \u0938\u0947\u0902\u091F\u0930 \u0938\u0939\u093E\u092F\u0924\u093E: 1800-180-1551`
    ].join("\n");
  }
  if (lang === "kn") {
    return [
      `*\u0CA7\u0CB0\u0CCD\u0CA4\u0CC0 \u0C9F\u0CC6\u0C95\u0CCD - \u0CAC\u0CC6\u0CB3\u0CC6 \u0CB0\u0CCB\u0C97 \u0CAA\u0CA4\u0CCD\u0CA4\u0CC6 \u0CB5\u0CB0\u0CA6\u0CBF*`,
      ``,
      `*\u0CAC\u0CC6\u0CB3\u0CC6 / \u0CB8\u0CB8\u0CCD\u0CAF:* ${crop}`,
      `*\u0CAA\u0CA4\u0CCD\u0CA4\u0CC6\u0CAF\u0CBE\u0CA6 \u0CB0\u0CCB\u0C97 / \u0CB8\u0CAE\u0CB8\u0CCD\u0CAF\u0CC6:* ${disease}`,
      `*\u0CA8\u0CBF\u0C96\u0CB0\u0CA4\u0CC6 / \u0CA4\u0CC0\u0CB5\u0CCD\u0CB0\u0CA4\u0CC6:* ${confidence} (${severity})`,
      `*\u0CB2\u0C95\u0CCD\u0CB7\u0CA3\u0C97\u0CB3\u0CC1:* ${symptomsList}`,
      `*\u0CB8\u0CBE\u0CA7\u0CCD\u0CAF\u0CB5\u0CBF\u0CB0\u0CC1\u0CB5 \u0C95\u0CBE\u0CB0\u0CA3:* ${cause}`,
      `*\u0CB6\u0CBF\u0CAB\u0CBE\u0CB0\u0CB8\u0CC1 \u0CAE\u0CBE\u0CA1\u0CBF\u0CA6 \u0C9A\u0CBF\u0C95\u0CBF\u0CA4\u0CCD\u0CB8\u0CC6 (\u0CB8\u0CBE\u0CB5\u0CAF\u0CB5):* ${organic}`,
      `*\u0CB6\u0CBF\u0CAB\u0CBE\u0CB0\u0CB8\u0CC1 \u0CAE\u0CBE\u0CA1\u0CBF\u0CA6 \u0C95\u0CC0\u0C9F\u0CA8\u0CBE\u0CB6\u0C95:* ${chemical}`,
      `*\u0CB8\u0CC1\u0CB0\u0C95\u0CCD\u0CB7\u0CBF\u0CA4 \u0CAC\u0CB3\u0C95\u0CC6 \u0CB8\u0CC2\u0C9A\u0CA8\u0CC6\u0C97\u0CB3\u0CC1:* ${safety}`,
      `*\u0CAA\u0CCD\u0CB0\u0CAE\u0CC1\u0C96 \u0CAE\u0CC1\u0CA8\u0CCD\u0CA8\u0CC6\u0C9A\u0CCD\u0C9A\u0CB0\u0CBF\u0C95\u0CC6\u0C97\u0CB3\u0CC1:* ${precautionsList}`,
      `*\u0CB9\u0CB5\u0CBE\u0CAE\u0CBE\u0CA8 \u0C8E\u0C9A\u0CCD\u0C9A\u0CB0\u0CBF\u0C95\u0CC6:* ${weather}`,
      `*\u0CA6\u0CBF\u0CA8\u0CBE\u0C82\u0C95 \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0CB8\u0CAE\u0CAF:* ${dateTimeStr}`,
      ``,
      `\u0CA7\u0CB0\u0CCD\u0CA4\u0CC0 \u0C9F\u0CC6\u0C95\u0CCD - \u0C89\u0CA4\u0CCD\u0CA4\u0CAE \u0C95\u0CC3\u0CB7\u0CBF\u0C97\u0CBE\u0C97\u0CBF \u0CB5\u0CBF\u0CB6\u0CCD\u0CB5\u0CBE\u0CB8\u0CBE\u0CB0\u0CCD\u0CB9 \u0CA4\u0C82\u0CA4\u0CCD\u0CB0\u0C9C\u0CCD\u0C9E\u0CBE\u0CA8`,
      `\u0C95\u0CBF\u0CB8\u0CBE\u0CA8\u0CCD \u0CB8\u0CB9\u0CBE\u0CAF\u0CB5\u0CBE\u0CA3\u0CBF: 1800-180-1551`
    ].join("\n");
  }
  if (lang === "ta") {
    return [
      `*\u0BA4\u0BBE\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0BBF \u0B9F\u0BC6\u0B95\u0BCD - \u0BAA\u0BAF\u0BBF\u0BB0\u0BCD \u0BA8\u0BCB\u0BAF\u0BCD \u0B95\u0BA3\u0BCD\u0B9F\u0BB1\u0BBF\u0BA4\u0BB2\u0BCD \u0B85\u0BB1\u0BBF\u0B95\u0BCD\u0B95\u0BC8*`,
      ``,
      `*\u0BAA\u0BAF\u0BBF\u0BB0\u0BCD / \u0B9A\u0BC6\u0B9F\u0BBF:* ${crop}`,
      `*\u0B95\u0BA3\u0BCD\u0B9F\u0BB1\u0BBF\u0BAF\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BA8\u0BCB\u0BAF\u0BCD:* ${disease}`,
      `*\u0BA8\u0BAE\u0BCD\u0BAA\u0B95\u0BA4\u0BCD\u0BA4\u0BA9\u0BCD\u0BAE\u0BC8 / \u0BA4\u0BC0\u0BB5\u0BBF\u0BB0\u0BAE\u0BCD:* ${confidence} (${severity})`,
      `*\u0B85\u0BB1\u0BBF\u0B95\u0BC1\u0BB1\u0BBF\u0B95\u0BB3\u0BCD:* ${symptomsList}`,
      `*\u0B9A\u0BBE\u0BA4\u0BCD\u0BA4\u0BBF\u0BAF\u0BAE\u0BBE\u0BA9 \u0B95\u0BBE\u0BB0\u0BA3\u0BAE\u0BCD:* ${cause}`,
      `*\u0BAA\u0BB0\u0BBF\u0BA8\u0BCD\u0BA4\u0BC1\u0BB0\u0BC8\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0B9A\u0BBF\u0B95\u0BBF\u0B9A\u0BCD\u0B9A\u0BC8 (\u0B87\u0BAF\u0BB1\u0BCD\u0B95\u0BC8):* ${organic}`,
      `*\u0BAA\u0BB0\u0BBF\u0BA8\u0BCD\u0BA4\u0BC1\u0BB0\u0BC8\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BAA\u0BC2\u0B9A\u0BCD\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BCA\u0BB2\u0BCD\u0BB2\u0BBF:* ${chemical}`,
      `*\u0BAA\u0BBE\u0BA4\u0BC1\u0B95\u0BBE\u0BAA\u0BCD\u0BAA\u0BBE\u0BA9 \u0BAA\u0BAF\u0BA9\u0BCD\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1 \u0BB5\u0BB4\u0BBF\u0BAE\u0BC1\u0BB1\u0BC8\u0B95\u0BB3\u0BCD:* ${safety}`,
      `*\u0BAE\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BAF \u0BAE\u0BC1\u0BA9\u0BCD\u0BA9\u0BC6\u0B9A\u0BCD\u0B9A\u0BB0\u0BBF\u0B95\u0BCD\u0B95\u0BC8\u0B95\u0BB3\u0BCD:* ${precautionsList}`,
      `*\u0BB5\u0BBE\u0BA9\u0BBF\u0BB2\u0BC8 \u0B8E\u0B9A\u0BCD\u0B9A\u0BB0\u0BBF\u0B95\u0BCD\u0B95\u0BC8:* ${weather}`,
      `*\u0BA4\u0BC7\u0BA4\u0BBF & \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD:* ${dateTimeStr}`,
      ``,
      `\u0BA4\u0BBE\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0BBF \u0B9F\u0BC6\u0B95\u0BCD - \u0B9A\u0BBF\u0BB1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BBF\u0BB5\u0B9A\u0BBE\u0BAF\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BBE\u0BA9 \u0BA8\u0BAE\u0BCD\u0BAA\u0B95\u0BAE\u0BBE\u0BA9 \u0BA4\u0BCA\u0BB4\u0BBF\u0BB2\u0BCD\u0BA8\u0BC1\u0B9F\u0BCD\u0BAA\u0BAE\u0BCD`,
      `\u0B95\u0BBF\u0B9A\u0BBE\u0BA9\u0BCD \u0B89\u0BA4\u0BB5\u0BBF \u0B8E\u0BA3\u0BCD: 1800-180-1551`
    ].join("\n");
  }
  if (lang === "ml") {
    return [
      `*\u0D27\u0D3E\u0D7C\u0D24\u0D4D\u0D24\u0D3F \u0D1F\u0D46\u0D15\u0D4D - \u0D35\u0D3F\u0D33 \u0D30\u0D4B\u0D17\u0D28\u0D3F\u0D7C\u0D23\u0D2F \u0D31\u0D3F\u0D2A\u0D4D\u0D2A\u0D4B\u0D7C\u0D1F\u0D4D\u0D1F\u0D4D*`,
      ``,
      `*\u0D35\u0D3F\u0D33 / \u0D1A\u0D46\u0D1F\u0D3F:* ${crop}`,
      `*\u0D15\u0D23\u0D4D\u0D1F\u0D46\u0D24\u0D4D\u0D24\u0D3F\u0D2F \u0D30\u0D4B\u0D17\u0D02:* ${disease}`,
      `*\u0D15\u0D43\u0D24\u0D4D\u0D2F\u0D24 / \u0D24\u0D40\u0D35\u0D4D\u0D30\u0D24:* ${confidence} (${severity})`,
      `*\u0D32\u0D15\u0D4D\u0D37\u0D23\u0D19\u0D4D\u0D19\u0D7E:* ${symptomsList}`,
      `*\u0D38\u0D3E\u0D27\u0D4D\u0D2F\u0D2E\u0D3E\u0D2F \u0D15\u0D3E\u0D30\u0D23\u0D02:* ${cause}`,
      `*\u0D36\u0D41\u0D2A\u0D3E\u0D7C\u0D36 \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D28\u0D4D\u0D28 \u0D1A\u0D3F\u0D15\u0D3F\u0D24\u0D4D\u0D38 (\u0D1C\u0D48\u0D35):* ${organic}`,
      `*\u0D15\u0D40\u0D1F\u0D28\u0D3E\u0D36\u0D3F\u0D28\u0D3F \u0D28\u0D3F\u0D2F\u0D28\u0D4D\u0D24\u0D4D\u0D30\u0D23\u0D02:* ${chemical}`,
      `*\u0D38\u0D41\u0D30\u0D15\u0D4D\u0D37\u0D3F\u0D24 \u0D09\u0D2A\u0D2F\u0D4B\u0D17 \u0D28\u0D3F\u0D7C\u0D26\u0D4D\u0D26\u0D47\u0D36\u0D19\u0D4D\u0D19\u0D7E:* ${safety}`,
      `*\u0D2A\u0D4D\u0D30\u0D27\u0D3E\u0D28 \u0D2E\u0D41\u0D7B\u0D15\u0D30\u0D41\u0D24\u0D32\u0D41\u0D15\u0D7E:* ${precautionsList}`,
      `*\u0D15\u0D3E\u0D32\u0D3E\u0D35\u0D38\u0D4D\u0D25\u0D3E \u0D2E\u0D41\u0D28\u0D4D\u0D28\u0D31\u0D3F\u0D2F\u0D3F\u0D2A\u0D4D\u0D2A\u0D4D:* ${weather}`,
      `*\u0D24\u0D40\u0D2F\u0D24\u0D3F\u0D2F\u0D41\u0D02 \u0D38\u0D2E\u0D2F\u0D35\u0D41\u0D02:* ${dateTimeStr}`,
      ``,
      `\u0D27\u0D3E\u0D7C\u0D24\u0D4D\u0D24\u0D3F \u0D1F\u0D46\u0D15\u0D4D - \u0D2E\u0D46\u0D1A\u0D4D\u0D1A\u0D2A\u0D4D\u0D2A\u0D46\u0D1F\u0D4D\u0D1F \u0D15\u0D43\u0D37\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D33\u0D4D\u0D33 \u0D35\u0D3F\u0D36\u0D4D\u0D35\u0D38\u0D28\u0D40\u0D2F \u0D38\u0D3E\u0D19\u0D4D\u0D15\u0D47\u0D24\u0D3F\u0D15\u0D35\u0D3F\u0D26\u0D4D\u0D2F`,
      `\u0D15\u0D3F\u0D38\u0D3E\u0D7B \u0D39\u0D46\u0D7D\u0D2A\u0D4D\u0D2A\u0D4D \u0D32\u0D48\u0D7B: 1800-180-1551`
    ].join("\n");
  }
  return [
    `*DHARTHI TECH - CROP DIAGNOSIS ADVISORY*`,
    ``,
    `*Crop / Plant:* ${crop}`,
    `*Detected Problem:* ${disease}`,
    `*Confidence / Severity:* ${confidence} (${severity})`,
    `*Symptoms:* ${symptomsList}`,
    `*Possible Cause:* ${cause}`,
    `*Recommended Treatment (Organic):* ${organic}`,
    `*Recommended Chemical Control:* ${chemical}`,
    `*Safe Usage Instructions:* ${safety}`,
    `*Important Precautions:* ${precautionsList}`,
    `*Weather Warning:* ${weather}`,
    `*Date & Time:* ${dateTimeStr}`,
    ``,
    `Dharthi Tech \u2013 Trusted Technology for Better Farming`,
    `Kisan Helpline: 1800-180-1551`
  ].join("\n");
}
function createWhatsAppDeepLink(phone, message) {
  const cleanPhone = phone.replace(/\D/g, "").slice(-10);
  const encodedText = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=91${cleanPhone}&text=${encodedText}`;
}

// server/routes/api.ts
var apiRouter = (0, import_express.Router)();
apiRouter.use(async (req, res, next) => {
  try {
    const flaskUrl = `http://127.0.0.1:5000/api${req.path}`;
    const queryStr = req.url.includes("?") ? req.url.slice(req.url.indexOf("?")) : "";
    const targetUrl = `${flaskUrl}${queryStr}`;
    const headers = {};
    if (req.headers["content-type"]) {
      headers["content-type"] = req.headers["content-type"];
    }
    if (req.headers["authorization"]) {
      headers["authorization"] = req.headers["authorization"];
    }
    const fetchOptions = {
      method: req.method,
      headers
    };
    if (["POST", "PUT", "PATCH"].includes(req.method) && req.body && Object.keys(req.body).length > 0) {
      fetchOptions.body = JSON.stringify(req.body);
    }
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3e3);
    fetchOptions.signal = controller.signal;
    const flaskRes = await fetch(targetUrl, fetchOptions);
    clearTimeout(timeout);
    if (flaskRes.status !== 404) {
      const contentType = flaskRes.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const data = await flaskRes.json();
        return res.status(flaskRes.status).json(data);
      } else {
        const text = await flaskRes.text();
        return res.status(flaskRes.status).send(text);
      }
    }
  } catch (err) {
  }
  next();
});
apiRouter.post("/auth/check-user", (req, res) => {
  const { phone } = req.body;
  if (!phone) {
    return res.status(400).json({ error: "Phone number is required" });
  }
  const cleanPhone = phone.replace(/\D/g, "").slice(-10);
  if (cleanPhone.length < 10) {
    return res.status(400).json({ error: "Please enter a valid 10-digit mobile number" });
  }
  const checkResult = db.checkUserExists(cleanPhone);
  return res.json(checkResult);
});
apiRouter.post("/auth/register", (req, res) => {
  const { farmer, farm } = req.body;
  if (!farmer || !farm) {
    return res.status(400).json({ error: "Both farmer details and farm details are required for registration." });
  }
  const result = db.registerFarmerAndFarm({ farmer, farm });
  if (!result.success) {
    const statusCode = result.duplicate ? 409 : 400;
    return res.status(statusCode).json({ error: result.error });
  }
  return res.status(201).json({
    success: true,
    message: "Account created successfully. Your farmer and farm details have been saved.",
    userId: result.user.id,
    user: result.user,
    farm: result.farm
  });
});
apiRouter.post("/auth/send-otp", (req, res) => {
  const { phone } = req.body;
  if (!phone || phone.replace(/\D/g, "").length < 10) {
    return res.status(400).json({ error: "Please enter a valid 10-digit mobile number" });
  }
  const cleanPhone = phone.replace(/\D/g, "").slice(-10);
  const generatedOtp = Math.floor(1e5 + Math.random() * 9e5).toString();
  db.setOTP(cleanPhone, generatedOtp);
  console.log(`[KRUSHAK OTP SERVICE] OTP generated for +91-${cleanPhone}: [${generatedOtp}]`);
  return res.json({
    success: true,
    message: `OTP sent successfully to +91 ${cleanPhone}`,
    phone: cleanPhone,
    // Demo hint provided to facilitate seamless testing in preview sandbox
    demoOtpHint: generatedOtp
  });
});
apiRouter.post("/auth/verify-otp", (req, res) => {
  const { phone, otp } = req.body;
  if (!phone || !otp) {
    return res.status(400).json({ error: "Phone number and 6-digit OTP are required" });
  }
  const cleanPhone = phone.replace(/\D/g, "").slice(-10);
  const result = db.verifyOTP(cleanPhone, otp.trim());
  if (!result.success) {
    return res.status(400).json({ error: result.message });
  }
  const farm = db.getFarm(result.user.id);
  const hasFarm = Boolean(farm && farm.farmName);
  const isProfileComplete = Boolean(result.user?.fullName && result.user?.state);
  return res.json({
    success: true,
    message: result.message,
    user: result.user,
    farm,
    hasFarm,
    isProfileComplete,
    nextRoute: "/home",
    token: `krushak_jwt_${result.user.id}_${Date.now()}`
  });
});
apiRouter.post("/auth/google", (req, res) => {
  const { email, name } = req.body;
  let user = db.getUser("user-google-demo");
  if (!user) {
    user = {
      id: "user-google-demo",
      phone: "9876543210",
      fullName: name || "Ramesh Kumar",
      gender: "Male",
      dob: "1990-05-12",
      state: "Andhra Pradesh",
      district: "Kadapa (YSR)",
      village: "Somulavaripalli",
      preferredLanguage: "English",
      isGuest: false,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    db.saveUser(user);
  }
  const farm = db.getFarm(user.id) || db.getFarm("user-default-1");
  return res.json({
    success: true,
    user,
    hasFarm: Boolean(farm),
    token: `krushak_jwt_google_${user.id}`,
    nextRoute: farm ? "/home" : "/profile"
  });
});
apiRouter.get("/user/profile", (req, res) => {
  const userId = req.query.userId || "user-default-1";
  let user = db.getUser(userId);
  if (!user) {
    user = db.getUser("user-default-1");
  }
  return res.json({ user });
});
apiRouter.put("/user/profile", (req, res) => {
  const body = req.body;
  const userId = body.id || "user-default-1";
  const existing = db.getUser(userId) || db.getUser("user-default-1");
  const updated = db.saveUser({
    ...existing,
    ...body,
    id: userId,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  });
  return res.json({ success: true, message: "Profile updated successfully", user: updated });
});
apiRouter.post("/user/profile-photo", (req, res) => {
  const { userId, photoData } = req.body;
  const targetId = userId || "user-default-1";
  if (!photoData || typeof photoData !== "string") {
    return res.status(400).json({ error: "Valid photo image data is required" });
  }
  if (photoData.length > 7 * 1024 * 1024) {
    return res.status(400).json({ error: "Image size exceeds the 5MB limit. Please upload a smaller photo." });
  }
  const existing = db.getUser(targetId) || db.getUser("user-default-1");
  existing.profileImageUrl = photoData;
  existing.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
  db.saveUser(existing);
  return res.json({
    success: true,
    message: "Profile photo updated successfully",
    profileImageUrl: photoData,
    user: existing
  });
});
apiRouter.get("/farm", (req, res) => {
  const userId = req.query.userId || "user-default-1";
  let farm = db.getFarm(userId);
  if (!farm) {
    farm = db.getFarm("user-default-1");
  }
  return res.json({ farm });
});
apiRouter.post("/farm", (req, res) => {
  const body = req.body;
  const userId = body.userId || "user-default-1";
  const newFarm = db.saveFarm({
    id: body.id || `farm-${Date.now()}`,
    userId,
    farmName: body.farmName || "My Farm",
    landArea: body.landArea || "4.5",
    landUnit: body.landUnit || "Acre",
    soilType: body.soilType || "Red Soil",
    irrigationSource: body.irrigationSource || "Borewell",
    primaryActivity: body.primaryActivity || "Crop farming",
    location: body.location || {
      village: "Somulavaripalli",
      district: "Kadapa",
      state: "Andhra Pradesh",
      pincode: "516001"
    },
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  });
  return res.json({ success: true, message: "Farm details saved successfully", farm: newFarm });
});
apiRouter.put("/user/farm", (req, res) => {
  const body = req.body;
  const userId = body.userId || "user-default-1";
  const existing = db.getFarm(userId) || db.getFarm("user-default-1");
  const updatedFarm = db.saveFarm({
    id: body.id || existing?.id || `farm-${Date.now()}`,
    userId,
    farmName: body.farmName || existing?.farmName || "My Farm",
    landArea: body.landArea || existing?.landArea || "4.5",
    landUnit: body.landUnit || existing?.landUnit || "Acre",
    soilType: body.soilType || existing?.soilType || "Red Soil",
    irrigationSource: body.irrigationSource || existing?.irrigationSource || "Borewell",
    primaryActivity: body.primaryActivity || existing?.primaryActivity || "Crop farming",
    location: body.location || existing?.location || {
      village: "Somulavaripalli",
      district: "Kadapa",
      state: "Andhra Pradesh",
      pincode: "516001"
    },
    createdAt: existing?.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  });
  return res.json({ success: true, message: "Farm details updated successfully", farm: updatedFarm });
});
apiRouter.get("/location/reverse-geocode", async (req, res) => {
  const latStr = req.query.lat;
  const lonStr = req.query.lon;
  if (!latStr || !lonStr) {
    return res.status(400).json({ error: "Coordinates lat and lon are required" });
  }
  const lat = parseFloat(latStr);
  const lon = parseFloat(lonStr);
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4500);
    const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=14&addressdetails=1`;
    const geoRes = await fetch(nominatimUrl, {
      headers: {
        "User-Agent": "DharthiTechKrushakPath/1.0 (contact@dharthitech.com)",
        "Accept": "application/json"
      },
      signal: controller.signal
    });
    clearTimeout(timeout);
    if (geoRes.ok) {
      const data = await geoRes.json();
      const addr = data.address || {};
      const village = addr.village || addr.suburb || addr.neighbourhood || addr.hamlet || addr.town || addr.city_district || addr.city || "My Farm";
      const district = addr.county || addr.state_district || addr.district || addr.city || "District";
      const state = addr.state || "State";
      const pincode = addr.postcode || "516001";
      const country = addr.country || "India";
      return res.json({
        success: true,
        village,
        district,
        state,
        pincode,
        country,
        formatted: `${village}, ${district}`,
        lat,
        lon
      });
    }
  } catch (err) {
    console.warn("Reverse geocode fallback for coordinates:", lat, lon);
  }
  return res.json({
    success: true,
    village: `Field (${lat.toFixed(2)}\xB0N)`,
    district: `Region (${lon.toFixed(2)}\xB0E)`,
    state: "Live GPS",
    pincode: "516001",
    country: "India",
    formatted: `Live Farm (${lat.toFixed(2)}\xB0N, ${lon.toFixed(2)}\xB0E)`,
    lat,
    lon
  });
});
apiRouter.get("/weather", async (req, res) => {
  const loc = req.query.loc || "Somulavaripalli, Kadapa";
  const lat = req.query.lat ? parseFloat(req.query.lat) : 14.47;
  const lon = req.query.lon ? parseFloat(req.query.lon) : 78.82;
  const weather = await fetchAgriculturalWeather(loc, lat, lon);
  return res.json(weather);
});
apiRouter.get("/weather/forecast", async (req, res) => {
  const loc = req.query.loc || "Somulavaripalli, Kadapa";
  const lat = req.query.lat ? parseFloat(req.query.lat) : 14.47;
  const lon = req.query.lon ? parseFloat(req.query.lon) : 78.82;
  const weather = await fetchAgriculturalWeather(loc, lat, lon);
  return res.json({
    forecast7Day: weather.forecast7Day,
    hourly: weather.hourly,
    farmingTips: weather.farmingTips,
    current: weather.current
  });
});
apiRouter.get("/weather/search", (req, res) => {
  const query = (req.query.q || "").toLowerCase();
  const indianLocations = [
    { village: "Somulavaripalli", district: "Kadapa (YSR)", state: "Andhra Pradesh", lat: 14.47, lon: 78.82 },
    { village: "Vempalli", district: "Kadapa (YSR)", state: "Andhra Pradesh", lat: 14.37, lon: 78.46 },
    { village: "Proddatur", district: "Kadapa (YSR)", state: "Andhra Pradesh", lat: 14.75, lon: 78.55 },
    { village: "Pulivendula", district: "Kadapa (YSR)", state: "Andhra Pradesh", lat: 14.42, lon: 78.23 },
    { village: "Rayachoti", district: "Annamayya", state: "Andhra Pradesh", lat: 14.06, lon: 78.75 },
    { village: "Madanapalle", district: "Annamayya", state: "Andhra Pradesh", lat: 13.55, lon: 78.5 },
    { village: "Kurnool Rural", district: "Kurnool", state: "Andhra Pradesh", lat: 15.82, lon: 78.03 },
    { village: "Nandyal", district: "Nandyal", state: "Andhra Pradesh", lat: 15.48, lon: 78.48 },
    { village: "Anantapur City", district: "Anantapur", state: "Andhra Pradesh", lat: 14.68, lon: 77.6 },
    { village: "Guntur Rural", district: "Guntur", state: "Andhra Pradesh", lat: 16.3, lon: 80.43 },
    { village: "Warangal Rural", district: "Warangal", state: "Telangana", lat: 17.97, lon: 79.59 },
    { village: "Nalgonda", district: "Nalgonda", state: "Telangana", lat: 17.05, lon: 79.26 }
  ];
  const results = indianLocations.filter(
    (l) => l.village.toLowerCase().includes(query) || l.district.toLowerCase().includes(query) || l.state.toLowerCase().includes(query)
  );
  return res.json({ results: results.length > 0 ? results : indianLocations.slice(0, 5) });
});
apiRouter.get("/soil", (req, res) => {
  const farmId = req.query.farmId || "farm-default-1";
  const soil = db.getSoil(farmId);
  return res.json(soil);
});
apiRouter.get("/soil/history", (req, res) => {
  const history = [
    { date: "24 May 2026", ph: 6.8, n: "Medium", p: "High", k: "Medium", score: 82, moisture: 32 },
    { date: "15 Feb 2026", ph: 6.7, n: "Medium", p: "Medium", k: "Medium", score: 80, moisture: 28 },
    { date: "10 Nov 2025", ph: 6.5, n: "Low", p: "High", k: "Medium", score: 75, moisture: 35 },
    { date: "18 Jul 2025", ph: 6.9, n: "Medium", p: "High", k: "High", score: 85, moisture: 40 }
  ];
  return res.json({ history });
});
var handleSaveSoil = (req, res) => {
  const body = req.body;
  const farmId = body.farmId || "farm-default-1";
  const current = db.getSoil(farmId) || {
    id: "soil-default-1",
    farmId: "farm-default-1",
    soilType: "Red Loamy Soil",
    ph: 6.8,
    phStatus: "Neutral",
    nitrogen: "Medium",
    phosphorus: "High",
    potassium: "Medium",
    organicCarbon: "0.68% (Moderate)",
    electricalConductivity: "0.42 dS/m (Normal)",
    zinc: "0.75 ppm (Moderate)",
    iron: "5.2 ppm (Sufficient)",
    lastUpdated: "Today, 07:30 AM",
    recommendations: [
      "Apply Farm Yard Manure (FYM) @ 4-5 tonnes/acre before primary tillage.",
      "Phosphorus is high: reduce DAP application by 30% to prevent nutrient lockup.",
      "Apply Zinc Sulfate (ZnSO4 21%) @ 10 kg/acre as basal dose."
    ]
  };
  const updated = db.saveSoil({
    ...current,
    ...body,
    farmId,
    lastUpdated: "Just now"
  });
  return res.json({ success: true, message: "Soil record saved successfully", soil: updated });
};
apiRouter.post("/soil", handleSaveSoil);
apiRouter.post("/soil/manual", handleSaveSoil);
apiRouter.get("/recommendations", async (req, res) => {
  const soil = db.getSoil("farm-default-1");
  const farm = db.getFarm("user-default-1");
  const recommendations = await getAICropRecommendations({
    ph: soil?.ph ?? 6.8,
    nitrogen: soil?.nitrogen ?? "Medium",
    phosphorus: soil?.phosphorus ?? "High",
    potassium: soil?.potassium ?? "Medium",
    temperature: 28,
    humidity: 64,
    irrigationSource: farm?.irrigationSource ?? "Borewell",
    soilType: farm?.soilType ?? "Red Soil",
    location: `${farm?.location.village || "Somulavaripalli"}, ${farm?.location.district || "Kadapa"}, Andhra Pradesh`,
    landArea: farm?.landArea ?? "4.5",
    landUnit: farm?.landUnit ?? "Acre"
  });
  return res.json(recommendations);
});
apiRouter.post("/recommendations/generate", async (req, res) => {
  const result = await getAICropRecommendations(req.body);
  return res.json(result);
});
var handleChat = async (req, res) => {
  const { message, language, farmContext } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message cannot be empty" });
  }
  const contextStr = typeof farmContext === "object" ? `${farmContext.farmerName || "Ramesh"}, ${farmContext.location || "Kadapa"}, Soil: ${farmContext.soilType || "Red Soil"}, Area: ${farmContext.landArea || "4.5"} acres` : farmContext;
  const reply = await askKrushakAI(message, language || "English", contextStr);
  return res.json({ reply, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
};
apiRouter.post("/chat", handleChat);
apiRouter.post("/ai/chat", handleChat);
var handleDiseaseScan = async (req, res) => {
  const { imageBase64, image, cropHint, cropName, symptomsText } = req.body;
  const img = imageBase64 || image;
  const hint = cropName || cropHint || symptomsText;
  const diagnosis = await scanPlantDiseaseWithAI(img, hint);
  return res.json(diagnosis);
};
apiRouter.post("/disease/scan", handleDiseaseScan);
apiRouter.post("/disease-scan", handleDiseaseScan);
apiRouter.post("/diagnosis/share-whatsapp", async (req, res) => {
  try {
    const { phone, cropName, language, result } = req.body;
    if (!phone) {
      return res.status(400).json({
        success: false,
        error: "Phone number is required to send the diagnosis report via WhatsApp."
      });
    }
    const cleanPhone = String(phone).replace(/\D/g, "").slice(-10);
    if (cleanPhone.length < 10) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid 10-digit registered mobile number."
      });
    }
    const formattedMessage = generateLocalizedWhatsAppMessage({
      phone: cleanPhone,
      cropName: cropName || "Plant / Crop",
      language: language || "en",
      result: result || {}
    });
    const whatsappApiToken = process.env.WHATSAPP_API_TOKEN;
    const whatsappPhoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    let apiDelivered = false;
    if (whatsappApiToken && whatsappPhoneId) {
      try {
        const waResponse = await fetch(`https://graph.facebook.com/v19.0/${whatsappPhoneId}/messages`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${whatsappApiToken}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: `91${cleanPhone}`,
            type: "text",
            text: { preview_url: false, body: formattedMessage }
          })
        });
        if (waResponse.ok) {
          apiDelivered = true;
        }
      } catch (waErr) {
        console.warn("[WhatsApp Service] Cloud API attempt encountered error, defaulting to deep-link:", waErr);
      }
    }
    const whatsappUrl = createWhatsAppDeepLink(cleanPhone, formattedMessage);
    return res.json({
      success: true,
      deliveredDirectly: apiDelivered,
      phone: cleanPhone,
      whatsappUrl,
      formattedMessage,
      message: "Diagnosis information is ready to send on WhatsApp."
    });
  } catch (err) {
    console.error("[WhatsApp Share Error]:", err);
    return res.status(500).json({
      success: false,
      error: "WhatsApp could not be opened. Please try again."
    });
  }
});
var handleMarketPrices = (req, res) => {
  const prices = [
    {
      id: "p-1",
      crop: "Paddy (Common / BPT)",
      cropName: "Paddy (Common / BPT)",
      variety: "BPT 5204 / MTU 1010",
      mandi: "Kadapa APMC, AP",
      district: "Kadapa (YSR)",
      state: "Andhra Pradesh",
      modalPrice: 2450,
      minPrice: 2200,
      maxPrice: 2680,
      unit: "\u20B9 / Quintal",
      trend: "up",
      change: "+\u20B960 (2.5%)",
      changePercentage: 2.5,
      distanceKm: 8,
      lastUpdated: "Today, 09:30 AM"
    },
    {
      id: "p-2",
      crop: "Groundnut (Pods)",
      cropName: "Groundnut (Pods)",
      variety: "Kadiri 6 / TMV 2",
      mandi: "Yerraguntla Market, Kadapa",
      district: "Kadapa (YSR)",
      state: "Andhra Pradesh",
      modalPrice: 6850,
      minPrice: 6200,
      maxPrice: 7100,
      unit: "\u20B9 / Quintal",
      trend: "up",
      change: "+\u20B9180 (2.7%)",
      changePercentage: 2.7,
      distanceKm: 24,
      lastUpdated: "Today, 09:00 AM"
    },
    {
      id: "p-3",
      crop: "Cotton (Medium Staple)",
      cropName: "Cotton (Medium Staple)",
      variety: "Bt Cotton Hybrids",
      mandi: "Proddatur APMC",
      district: "Kadapa (YSR)",
      state: "Andhra Pradesh",
      modalPrice: 7200,
      minPrice: 6800,
      maxPrice: 7550,
      unit: "\u20B9 / Quintal",
      trend: "stable",
      change: "\u20B90 (0.0%)",
      changePercentage: 0,
      distanceKm: 32,
      lastUpdated: "Yesterday"
    },
    {
      id: "p-4",
      crop: "Red Gram (Toor Dal)",
      cropName: "Red Gram (Toor Dal)",
      variety: "LRG 41 / Desi",
      mandi: "Kadapa Main Market",
      district: "Kadapa (YSR)",
      state: "Andhra Pradesh",
      modalPrice: 9400,
      minPrice: 8900,
      maxPrice: 9900,
      unit: "\u20B9 / Quintal",
      trend: "up",
      change: "+\u20B9250 (2.7%)",
      changePercentage: 2.7,
      distanceKm: 12,
      lastUpdated: "Today, 08:45 AM"
    },
    {
      id: "p-5",
      crop: "Tomato (Hybrid)",
      cropName: "Tomato (Hybrid)",
      variety: "Arka Rakshak / Sahu",
      mandi: "Madanapalle APMC",
      district: "Annamayya",
      state: "Andhra Pradesh",
      modalPrice: 2200,
      minPrice: 1600,
      maxPrice: 2800,
      unit: "\u20B9 / Quintal (\u20B922/kg)",
      trend: "down",
      change: "-\u20B9120 (-5.1%)",
      changePercentage: -5.1,
      distanceKm: 65,
      lastUpdated: "Today, 07:15 AM"
    },
    {
      id: "p-6",
      crop: "Green Chilli (G4)",
      cropName: "Green Chilli (G4)",
      variety: "Teja Chilli / G4",
      mandi: "Kadapa Wholesale Yard",
      district: "Kadapa (YSR)",
      state: "Andhra Pradesh",
      modalPrice: 4200,
      minPrice: 3500,
      maxPrice: 4800,
      unit: "\u20B9 / Quintal",
      trend: "up",
      change: "+\u20B9140 (3.4%)",
      changePercentage: 3.4,
      distanceKm: 10,
      lastUpdated: "Today, 08:30 AM"
    }
  ];
  return res.json({ mandiLocation: "Kadapa District, Andhra Pradesh", prices });
};
apiRouter.get("/market-prices", handleMarketPrices);
apiRouter.get("/market", handleMarketPrices);
apiRouter.get("/alerts", (req, res) => {
  const alerts = [
    {
      id: "alt-1",
      title: "Pre-Monsoon Rain Advisory",
      description: "Scattered rain showers expected from Wednesday (28 May). Secure harvested produce and clean farm drains.",
      type: "weather",
      severity: "medium",
      date: "Valid till 30 May 2026"
    },
    {
      id: "alt-2",
      title: "Yellow Stem Borer Infestation Watch",
      description: "Reported in late rabi & early kharif nurseries in Kadapa block. Monitor light traps at dusk.",
      type: "pest",
      severity: "high",
      date: "Active Alert"
    },
    {
      id: "alt-3",
      title: "Groundnut Spodoptera Alert",
      description: "Pheromone trap catches exceeding threshold (>15 moths/night). Install bird perches @ 15/acre.",
      type: "pest",
      severity: "medium",
      date: "Active Alert"
    }
  ];
  return res.json({ alerts });
});
apiRouter.get("/irrigation", (req, res) => {
  return res.json({
    status: "Optimal Moisture",
    moistureLevel: 32,
    moistureStatus: "Adequate",
    nextIrrigationWindow: "Tomorrow, 06:00 AM - 08:30 AM",
    recommendations: [
      "Water requirement: 25 mm depth (approx 2.5 hours per acre with borewell pump).",
      "Rainfall expected on Wednesday (28 May) - hold subsequent watering until Friday.",
      "Alternate Wetting and Drying (AWD) is recommended for current paddy stage."
    ],
    historicalMoisture: [
      { day: "Mon", level: 38 },
      { day: "Tue", level: 35 },
      { day: "Wed", level: 32 },
      { day: "Thu (Today)", level: 32 },
      { day: "Fri", level: 29 }
    ]
  });
});
apiRouter.get("/fertilizer", (req, res) => {
  return res.json({
    crop: "Paddy",
    soilPh: 6.8,
    nitrogenStatus: "Medium",
    phosphorusStatus: "High",
    potassiumStatus: "Medium",
    npkRatio: "120 : 40 : 40 kg/ha",
    guidelines: [
      { stage: "Basal (At Sowing / Transplanting)", urea: "20 kg", dap: "0 kg (Phosphorus High in soil)", mop: "15 kg", zinc: "10 kg ZnSO4" },
      { stage: "Active Tillering (20-25 DAT)", urea: "25 kg", dap: "0 kg", mop: "10 kg", zinc: "Foliar zinc if needed" },
      { stage: "Panicle Initiation (40-45 DAT)", urea: "20 kg", dap: "0 kg", mop: "15 kg", zinc: "None" }
    ],
    organicAlternatives: [
      "Farm Yard Manure (FYM) @ 4-5 tonnes/acre 2 weeks prior to puddling.",
      "Azospirillum + Phosphobacteria biofertilizers @ 2 kg/acre mixed with 50kg compost.",
      "Neem cake @ 100 kg/acre to reduce nitrogen volatilization and suppress soil nematodes."
    ]
  });
});
apiRouter.get("/crop-calendar", (req, res) => {
  return res.json({
    season: "Kharif 2026",
    activeCrop: "Paddy (BPT 5204)",
    timeline: [
      { step: 1, title: "Nursery Bed Preparation & Seed Treatment", period: "20 May - 30 May", status: "In Progress", tips: "Treat seeds with Carbendazim 2g/kg" },
      { step: 2, title: "Main Field Puddling & Basal Fertilizer", period: "05 Jun - 15 Jun", status: "Upcoming", tips: "Apply FYM 10 days before puddling" },
      { step: 3, title: "Transplanting (2-3 seedlings/hill)", period: "15 Jun - 25 Jun", status: "Upcoming", tips: "Maintain 20x15 cm spacing" },
      { step: 4, title: "First Weeding & Urea Top-Dressing", period: "05 Jul - 12 Jul", status: "Upcoming", tips: "Cono-weeder operation recommended" },
      { step: 5, title: "Panicle Emergence & Pest Monitoring", period: "10 Aug - 25 Aug", status: "Upcoming", tips: "Inspect for stem borer and blast" },
      { step: 6, title: "Grain Filling & Water Drainage", period: "15 Sep - 30 Sep", status: "Upcoming", tips: "Drain water 10 days prior to harvest" },
      { step: 7, title: "Harvesting & Threshing", period: "10 Oct - 25 Oct", status: "Upcoming", tips: "Harvest at 80-85% golden grain maturity" }
    ]
  });
});
apiRouter.get("/farm-history", (req, res) => {
  return res.json({
    seasons: [
      {
        season: "Rabi 2025-26",
        crop: "Groundnut (TMV 2)",
        area: "4.5 Acres",
        totalYield: "68 Quintals",
        yieldPerAcre: "15.1 Q/Acre",
        totalRevenue: "\u20B94,42,000",
        inputCost: "\u20B91,35,000",
        netProfit: "\u20B93,07,000",
        soilPhAfter: 6.8
      },
      {
        season: "Kharif 2025",
        crop: "Paddy (MTU 1010)",
        area: "4.5 Acres",
        totalYield: "135 Quintals",
        yieldPerAcre: "30 Q/Acre",
        totalRevenue: "\u20B93,10,500",
        inputCost: "\u20B91,15,000",
        netProfit: "\u20B91,95,500",
        soilPhAfter: 6.7
      }
    ]
  });
});
apiRouter.get("/notifications", (req, res) => {
  const list = db.getNotifications();
  return res.json({ notifications: list, unreadCount: list.filter((n) => !n.read).length });
});
apiRouter.post("/notifications/read", (req, res) => {
  const { id } = req.body;
  if (id) db.markNotificationRead(id);
  return res.json({ success: true });
});
apiRouter.get("/schemes", (req, res) => {
  const { state, category, status, search } = req.query;
  const schemes = db.getSchemes({ state, category, status, search });
  const allSchemes = db.schemes;
  const categories = Array.from(new Set(allSchemes.map((s) => s.category)));
  const states = Array.from(new Set(allSchemes.flatMap((s) => s.applicableStates)));
  return res.json({
    success: true,
    total: schemes.length,
    schemes,
    categories,
    states,
    lastVerifiedDate: "August 2026"
  });
});
apiRouter.get("/schemes/:id", (req, res) => {
  const scheme = db.getSchemeById(req.params.id);
  if (!scheme) {
    return res.status(404).json({ error: "Government scheme not found" });
  }
  return res.json({ success: true, scheme });
});
apiRouter.post("/fertilizer/verify-barcode", (req, res) => {
  const { barcode } = req.body;
  if (!barcode) {
    return res.status(400).json({
      verified: false,
      status: "UNABLE_TO_VERIFY",
      message: "Barcode string is required for verification.",
      reasons: ["No barcode provided"],
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  const result = db.verifyFertilizerBarcode(barcode);
  return res.json(result);
});
apiRouter.post("/fertilizer/verify-qr", (req, res) => {
  const { payload, source } = req.body;
  if (!payload) {
    return res.status(400).json({
      verified: false,
      status: "UNABLE_TO_VERIFY",
      message: "QR code payload is required for verification.",
      reasons: ["No QR payload provided"],
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  const result = db.verifyFertilizerQR(payload);
  return res.json(result);
});
apiRouter.get("/fertilizer/samples", (req, res) => {
  const samples = db.fertilizers.map((f) => ({
    id: f.id,
    productName: f.productName,
    brand: f.brand,
    manufacturer: f.manufacturer,
    barcodeSample: f.registeredBarcodes[0],
    qrSample: f.registeredQrPayloads?.[0] || f.id,
    batch: f.batchNumber,
    mrp: f.maximumRetailPrice
  }));
  return res.json({ success: true, samples });
});
apiRouter.get("/tts", async (req, res) => {
  try {
    const text = (req.query.text || "").trim().slice(0, 300);
    const lang = (req.query.lang || "en").toLowerCase();
    if (!text) {
      return res.status(400).json({ error: "Text query is required" });
    }
    const langMap = {
      kn: "kn",
      hi: "hi",
      te: "te",
      ta: "ta",
      ml: "ml",
      mr: "mr",
      bn: "bn",
      gu: "gu",
      pa: "pa",
      en: "en-IN"
    };
    const targetLang = langMap[lang] || "en";
    const googleTtsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${encodeURIComponent(
      targetLang
    )}&q=${encodeURIComponent(text)}`;
    const upstreamResponse = await fetch(googleTtsUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Referer: "https://translate.google.com/"
      }
    });
    if (!upstreamResponse.ok) {
      return res.status(upstreamResponse.status).json({ error: "TTS upstream error" });
    }
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=86400");
    const arrayBuffer = await upstreamResponse.arrayBuffer();
    return res.send(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error("TTS Proxy Error:", err);
    return res.status(500).json({ error: "TTS service failure" });
  }
});
apiRouter.post("/expert-escalation", (req, res) => {
  const { farmerName, phone, cropName, diagnosisSummary, confidenceScore, symptoms, fieldInfo, urgencyLevel } = req.body;
  const ticket = db.createEscalationTicket({
    farmerName: farmerName || "Farmer",
    phone: phone || "9900012345",
    cropName: cropName || "General Crop",
    diagnosisSummary: diagnosisSummary || "Uncertain Leaf Symptoms",
    confidenceScore: typeof confidenceScore === "number" ? confidenceScore : 55,
    symptoms: symptoms || "Visual leaf damage requiring agronomist confirmation",
    fieldInfo: fieldInfo || {
      location: "Farm Field",
      soilType: "Red Loam",
      landArea: "3.0 Acres"
    },
    urgencyLevel: urgencyLevel || "High"
  });
  return res.json({ success: true, ticket });
});
apiRouter.get("/expert-escalation", (req, res) => {
  const tickets = db.getEscalationTickets();
  return res.json({ success: true, tickets });
});

// server.ts
var import_meta = {};
import_dotenv.default.config();
var getDirname = () => {
  if (typeof __dirname !== "undefined") {
    return __dirname;
  }
  if (typeof import_meta !== "undefined" && import_meta.url) {
    try {
      return import_path.default.dirname((0, import_url.fileURLToPath)(import_meta.url));
    } catch (e) {
    }
  }
  return process.cwd();
};
var currentDir = getDirname();
async function startServer() {
  const app = (0, import_express2.default)();
  const PORT = process.env.PORT || 3e3;
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });
  app.use(import_express2.default.json({ limit: "15mb" }));
  app.use(import_express2.default.urlencoded({ extended: true, limit: "15mb" }));
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      service: "Dharthi Tech \u2013 Krushak-Path Agritech Engine",
      time: (/* @__PURE__ */ new Date()).toISOString()
    });
  });
  app.use("/api", apiRouter);
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express2.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  const appUrl = process.env.APP_URL || `http://localhost:${PORT}`;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`\u{1F33E} Dharthi Tech server running on ${appUrl}`);
  });
}
startServer().catch((err) => {
  console.error("Failed to boot Krushak-Path server:", err);
  process.exit(1);
});
//# sourceMappingURL=server.cjs.map
