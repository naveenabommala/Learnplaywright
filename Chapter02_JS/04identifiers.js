// Different Types of Naming Cases in JavaScript

// 1. CAMEL CASE (most common in JavaScript)
// First word lowercase, subsequent words start with uppercase
var firstName = "navi";
var lastName = "Bommala";
var emailAddress = "navi@example.com";
var phoneNumber = 9876543210;

// 2. SNAKE_CASE (common in database/API keys)
// All lowercase with underscores between words
var first_name = "navi";
var last_name = "Bommala";
var email_address = "navi@example.com";
var phone_number = 9876543210;

// 3. PASCAL_CASE or UpperCamelCase (used for Classes and Constructors)
// Every word starts with uppercase
var FirstName = "navi";
var LastName = "Bommala";
var EmailAddress = "navi@example.com";
var PersonInfo = { name: "navi" };

// 4. UPPER_SNAKE_CASE (used for Constants)
// All uppercase with underscores between words
var MAX_AGE = 100;
var MIN_AGE = 18;
var API_KEY = "abc123xyz";
var DATABASE_URL = "mongodb://localhost";

// 5. Special Characters (valid but not recommended)
var $ = 10;
var _a = 20;
var _privateVariable = "private";

// 6. Numbers in identifiers (but not as first character)
var a1 = 30;
var a123 = 40;
var test1 = "value1";
var var2Name = "variable with number";

// 7. Mixed examples - What to use when
var userName = "john_doe";          // camelCase for variables
function calculateTotalPrice() {}    // camelCase for functions
class UserProfile {}                 // PascalCase for classes
const API_TIMEOUT = 5000;            // UPPER_SNAKE_CASE for constants


