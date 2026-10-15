export const exercises = [
  {
    id: 1,
    topic: 'Variables & Data Types',
    topic_bn: 'ভেরিয়েবল এবং ডাটা টাইপ',
    difficulty: 'beginner',
    examples: [
      {
        id: 1,
        title: 'Simple Variable Declaration',
        title_bn: 'সাধারণ ভেরিয়েবল ঘোষণা',
        description: 'পাইথনে ভেরিয়েবল তৈরি করা খুবই সহজ। কোনো ডাটা টাইপ লেখার দরকার নেই।',
        code: `# ভেরিয়েবল তৈরি করুন (Create variables)
name = "রহিম"  # স্ট্রিং ভেরিয়েবল (String variable)
age = 25  # ইন্টিজার ভেরিয়েবল (Integer variable)
height = 5.8  # ফ্লোট ভেরিয়েবল (Float variable)
is_student = True  # বুলিয়ান ভেরিয়েবল (Boolean variable)

# ভেরিয়েবল প্রিন্ট করুন (Print variables)
print("নাম:", name)
print("বয়স:", age)
print("উচ্চতা:", height)
print("ছাত্র কিনা:", is_student)`,
        output: `নাম: রহিম
বয়স: 25
উচ্চতা: 5.8
ছাত্র কিনা: True`,
      },
      {
        id: 2,
        title: 'Type Checking',
        title_bn: 'টাইপ চেক করা',
        description: 'type() ফাংশন দিয়ে যেকোনো ভেরিয়েবলের টাইপ জানা যায়।',
        code: `# বিভিন্ন ডাটা টাইপের ভেরিয়েবল (Different data types)
text = "পাইথন"  # স্ট্রিং (String)
number = 100  # ইন্টিজার (Integer)
decimal = 3.14  # ফ্লোট (Float)
is_true = False  # বুলিয়ান (Boolean)

# type() দিয়ে টাইপ চেক করুন (Check type with type())
print(type(text))  # <class 'str'>
print(type(number))  # <class 'int'>
print(type(decimal))  # <class 'float'>
print(type(is_true))  # <class 'bool'>`,
        output: `<class 'str'>
<class 'int'>
<class 'float'>
<class 'bool'>`,
      },
    ],
  },
  {
    id: 2,
    topic: 'Input & Output',
    topic_bn: 'ইনপুট এবং আউটপুট',
    difficulty: 'beginner',
    examples: [
      {
        id: 3,
        title: 'Basic Input',
        title_bn: 'সাধারণ ইনপুট',
        description: 'input() ফাংশন দিয়ে ইউজার থেকে ডাটা নেওয়া যায়।',
        code: `# ইউজার থেকে নাম নিন (Get name from user)
name = input("আপনার নাম লিখুন: ")

# ইউজার থেকে বয়স নিন (Get age from user)
age = input("আপনার বয়স লিখুন: ")

# ইনপুট প্রিন্ট করুন (Print inputs)
print("আপনার নাম:", name)
print("আপনার বয়স:", age)

# নোট: input() সবসময় স্ট্রিং রিটার্ন করে (Note: input() always returns string)
print("বয়সের টাইপ:", type(age))`,
        output: `আপনার নাম লিখুন: করিম
আপনার বয়স লিখুন: 22
আপনার নাম: করিম
আপনার বয়স: 22
বয়সের টাইপ: <class 'str'>`,
      },
    ],
  },
  {
    id: 3,
    topic: 'Operators',
    topic_bn: 'অপারেটর',
    difficulty: 'beginner',
    examples: [
      {
        id: 4,
        title: 'Arithmetic Operators',
        title_bn: 'গাণিতিক অপারেটর',
        description: 'পাইথনে বিভিন্ন ম্যাথ অপারেশন করার জন্য অপারেটর ব্যবহার করা হয়।',
        code: `# দুইটি সংখ্যা নিন (Take two numbers)
a = 10
b = 3

# যোগ (Addition)
print("যোগ:", a + b)

# বিয়োগ (Subtraction)
print("বিয়োগ:", a - b)

# গুণ (Multiplication)
print("গুণ:", a * b)

# ভাগ (Division - ফ্লোট রিটার্ন করে)
print("ভাগ:", a / b)

# ইন্টিজার ভাগ (Integer division)
print("ইন্টিজার ভাগ:", a // b)

# মডুলাস/ভাগশেষ (Modulus - remainder)
print("ভাগশেষ:", a % b)

# পাওয়ার (Power/Exponent)
print("পাওয়ার:", a ** b)`,
        output: `যোগ: 13
বিয়োগ: 7
গুণ: 30
ভাগ: 3.3333333333333335
ইন্টিজার ভাগ: 3
ভাগশেষ: 1
পাওয়ার: 1000`,
      },
    ],
  },
  {
    id: 4,
    topic: 'Conditional Statements',
    topic_bn: 'শর্তাধীন স্টেটমেন্ট',
    difficulty: 'beginner',
    examples: [
      {
        id: 5,
        title: 'If-Else Statement',
        title_bn: 'If-Else স্টেটমেন্ট',
        description: 'শর্ত অনুযায়ী বিভিন্ন কোড চালানোর জন্য if-else ব্যবহার করা হয়।',
        code: `# বয়স চেক করুন (Check age)
age = 18

# if-else দিয়ে শর্ত চেক করুন (Check condition with if-else)
if age >= 18:  # যদি বয়স ১৮ বা তার বেশি হয় (If age is 18 or more)
    print("আপনি প্রাপ্তবয়স্ক")  # এই কোড চলবে (This code will run)
else:  # নাহলে (Otherwise)
    print("আপনি নাবালক")  # এই কোড চলবে (This code will run)

# আরেকটি উদাহরণ (Another example)
marks = 85

if marks >= 80:  # ৮০ বা তার বেশি (80 or more)
    print("গ্রেড: A+")
elif marks >= 70:  # ৭০ থেকে ৭৯ (70 to 79)
    print("গ্রেড: A")
elif marks >= 60:  # ৬০ থেকে ৬৯ (60 to 69)
    print("গ্রেড: B")
else:  # ৬০ এর কম (Less than 60)
    print("গ্রেড: C")`,
        output: `আপনি প্রাপ্তবয়স্ক
গ্রেড: A+`,
      },
    ],
  },
  {
    id: 5,
    topic: 'Loops',
    topic_bn: 'লুপ',
    difficulty: 'beginner',
    examples: [
      {
        id: 6,
        title: 'For Loop',
        title_bn: 'For লুপ',
        description: 'নির্দিষ্ট সংখ্যকবার কোড চালানোর জন্য for লুপ ব্যবহার করা হয়।',
        code: `# ১ থেকে ৫ পর্যন্ত সংখ্যা প্রিন্ট করুন (Print numbers from 1 to 5)
for i in range(1, 6):  # range(1, 6) মানে ১ থেকে ৫ (1 to 5)
    print(i)  # প্রতিটি সংখ্যা প্রিন্ট করুন (Print each number)

print("\\n---\\n")

# একটি লিস্টের উপর লুপ চালান (Loop over a list)
fruits = ["আম", "কলা", "আপেল"]  # ফলের লিস্ট (List of fruits)

for fruit in fruits:  # প্রতিটি ফল নিন (Take each fruit)
    print("আমি", fruit, "পছন্দ করি")  # প্রিন্ট করুন (Print)`,
        output: `1
2
3
4
5

---

আমি আম পছন্দ করি
আমি কলা পছন্দ করি
আমি আপেল পছন্দ করি`,
      },
      {
        id: 7,
        title: 'While Loop',
        title_bn: 'While লুপ',
        description: 'শর্ত সত্য থাকা পর্যন্ত কোড চালানোর জন্য while লুপ ব্যবহার করা হয়।',
        code: `# একটি কাউন্টার তৈরি করুন (Create a counter)
count = 1

# যতক্ষণ count ৫ এর কম থাকবে (While count is less than or equal to 5)
while count <= 5:
    print("কাউন্ট:", count)  # কাউন্ট প্রিন্ট করুন (Print count)
    count = count + 1  # কাউন্ট বাড়ান (Increment count)

print("লুপ শেষ")  # লুপ শেষ হলে এটি প্রিন্ট হবে (Prints when loop ends)`,
        output: `কাউন্ট: 1
কাউন্ট: 2
কাউন্ট: 3
কাউন্ট: 4
কাউন্ট: 5
লুপ শেষ`,
      },
    ],
  },
  {
    id: 6,
    topic: 'Lists',
    topic_bn: 'লিস্ট',
    difficulty: 'intermediate',
    examples: [
      {
        id: 8,
        title: 'List Operations',
        title_bn: 'লিস্ট অপারেশন',
        description: 'লিস্ট হলো একাধিক ভ্যালু সংরক্ষণের একটি ডাটা স্ট্রাকচার।',
        code: `# একটি লিস্ট তৈরি করুন (Create a list)
numbers = [10, 20, 30, 40, 50]

# লিস্ট প্রিন্ট করুন (Print list)
print("লিস্ট:", numbers)

# লিস্টে নতুন আইটেম যোগ করুন (Add new item to list)
numbers.append(60)  # শেষে যোগ করুন (Add at end)
print("যোগ করার পর:", numbers)

# নির্দিষ্ট ইনডেক্সের আইটেম অ্যাক্সেস করুন (Access item at specific index)
print("প্রথম আইটেম:", numbers[0])  # ইনডেক্স ০ (Index 0)
print("শেষ আইটেম:", numbers[-1])  # শেষ আইটেম (Last item)

# লিস্ট থেকে আইটেম মুছুন (Remove item from list)
numbers.remove(30)  # ৩০ মুছে দিন (Remove 30)
print("মোছার পর:", numbers)

# লিস্টের দৈর্ঘ্য (List length)
print("লিস্টের দৈর্ঘ্য:", len(numbers))`,
        output: `লিস্ট: [10, 20, 30, 40, 50]
যোগ করার পর: [10, 20, 30, 40, 50, 60]
প্রথম আইটেম: 10
শেষ আইটেম: 60
মোছার পর: [10, 20, 40, 50, 60]
লিস্টের দৈর্ঘ্য: 5`,
      },
    ],
  },
  {
    id: 7,
    topic: 'Functions',
    topic_bn: 'ফাংশন',
    difficulty: 'intermediate',
    examples: [
      {
        id: 9,
        title: 'Function Definition',
        title_bn: 'ফাংশন তৈরি করা',
        description: 'ফাংশন দিয়ে পুনরায় ব্যবহারযোগ্য কোড লেখা যায়।',
        code: `# একটি সাধারণ ফাংশন তৈরি করুন (Create a simple function)
def greet(name):  # প্যারামিটার নিন (Take parameter)
    """
    এই ফাংশন একটি শুভেচ্ছা বার্তা প্রিন্ট করে
    (This function prints a greeting message)
    """
    print("হ্যালো,", name + "!")  # বার্তা প্রিন্ট করুন (Print message)

# ফাংশন কল করুন (Call function)
greet("রহিম")
greet("করিম")

# রিটার্ন সহ ফাংশন (Function with return)
def add(a, b):  # দুইটি সংখ্যা নিন (Take two numbers)
    result = a + b  # যোগ করুন (Add them)
    return result  # রিজাল্ট রিটার্ন করুন (Return result)

# ফাংশন কল করে ফলাফল পান (Call function and get result)
sum = add(10, 20)
print("যোগফল:", sum)`,
        output: `হ্যালো, রহিম!
হ্যালো, করিম!
যোগফল: 30`,
      },
      {
        id: 10,
        title: 'Default Parameters',
        title_bn: 'ডিফল্ট প্যারামিটার',
        description: 'ফাংশনে ডিফল্ট ভ্যালু সেট করা যায়।',
        code: `# ডিফল্ট প্যারামিটার সহ ফাংশন (Function with default parameter)
def introduce(name, age=18):  # age এর ডিফল্ট ভ্যালু ১৮ (Default value of age is 18)
    """
    পরিচয় দেওয়ার ফাংশন (Function to introduce)
    """
    print(f"আমার নাম {name}, বয়স {age}")  # f-string ব্যবহার করুন (Use f-string)

# বিভিন্নভাবে কল করুন (Call in different ways)
introduce("রহিম")  # age দেওয়া হয়নি, ডিফল্ট ব্যবহার হবে (age not given, default will be used)
introduce("করিম", 25)  # age দেওয়া হয়েছে (age is given)
introduce("সামিরা", age=22)  # নামসহ প্যারামিটার পাস (Pass parameter with name)`,
        output: `আমার নাম রহিম, বয়স 18
আমার নাম করিম, বয়স 25
আমার নাম সামিরা, বয়স 22`,
      },
    ],
  },
  {
    id: 8,
    topic: 'Dictionaries',
    topic_bn: 'ডিকশনারি',
    difficulty: 'intermediate',
    examples: [
      {
        id: 11,
        title: 'Dictionary Basics',
        title_bn: 'ডিকশনারি বেসিক',
        description: 'ডিকশনারি key-value পেয়ার হিসেবে ডাটা সংরক্ষণ করে।',
        code: `# একটি ডিকশনারি তৈরি করুন (Create a dictionary)
student = {
    "name": "রহিম",  # key: "name", value: "রহিম"
    "age": 20,  # key: "age", value: 20
    "grade": "A+",  # key: "grade", value: "A+"
    "subjects": ["Python", "Math", "Physics"]  # ভ্যালু লিস্ট হতে পারে (Value can be list)
}

# ডিকশনারি প্রিন্ট করুন (Print dictionary)
print("ছাত্র তথ্য:", student)

# নির্দিষ্ট key এর ভ্যালু অ্যাক্সেস করুন (Access value of specific key)
print("নাম:", student["name"])
print("বয়স:", student["age"])

# নতুন key-value যোগ করুন (Add new key-value)
student["city"] = "ঢাকা"
print("শহর যোগের পর:", student)

# key আছে কিনা চেক করুন (Check if key exists)
if "grade" in student:
    print("গ্রেড পাওয়া গেছে:", student["grade"])`,
        output: `ছাত্র তথ্য: {'name': 'রহিম', 'age': 20, 'grade': 'A+', 'subjects': ['Python', 'Math', 'Physics']}
নাম: রহিম
বয়স: 20
শহর যোগের পর: {'name': 'রহিম', 'age': 20, 'grade': 'A+', 'subjects': ['Python', 'Math', 'Physics'], 'city': 'ঢাকা'}
গ্রেড পাওয়া গেছে: A+`,
      },
    ],
  },
  {
    id: 9,
    topic: 'String Operations',
    topic_bn: 'স্ট্রিং অপারেশন',
    difficulty: 'intermediate',
    examples: [
      {
        id: 12,
        title: 'String Methods',
        title_bn: 'স্ট্রিং মেথড',
        description: 'স্ট্রিং নিয়ে কাজ করার জন্য বিভিন্ন মেথড আছে।',
        code: `# একটি স্ট্রিং তৈরি করুন (Create a string)
text = "  পাইথন শিখুন সহজে  "

# স্ট্রিং প্রিন্ট করুন (Print string)
print("মূল টেক্সট:", repr(text))

# অতিরিক্ত স্পেস সরান (Remove extra spaces)
clean_text = text.strip()
print("স্পেস সরানোর পর:", repr(clean_text))

# বড় হাতের অক্ষরে রূপান্তর (Convert to uppercase)
print("বড় হাতের:", text.upper())

# ছোট হাতের অক্ষরে রূপান্তর (Convert to lowercase)
print("ছোট হাতের:", text.lower())

# স্ট্রিং প্রতিস্থাপন করুন (Replace string)
new_text = clean_text.replace("সহজে", "দ্রুত")
print("প্রতিস্থাপনের পর:", new_text)

# স্ট্রিং বিভক্ত করুন (Split string)
words = clean_text.split()  # স্পেস দিয়ে বিভক্ত (Split by space)
print("শব্দগুলো:", words)

# স্ট্রিং দৈর্ঘ্য (String length)
print("দৈর্ঘ্য:", len(clean_text))`,
        output: `মূল টেক্সট: '  পাইথন শিখুন সহজে  '
স্পেস সরানোর পর: 'পাইথন শিখুন সহজে'
বড় হাতের:   পাইথন শিখুন সহজে  
ছোট হাতের:   পাইথন শিখুন সহজে  
প্রতিস্থাপনের পর: পাইথন শিখুন দ্রুত
শব্দগুলো: ['পাইথন', 'শিখুন', 'সহজে']
দৈর্ঘ্য: 19`,
      },
    ],
  },
  {
    id: 10,
    topic: 'File Handling',
    topic_bn: 'ফাইল হ্যান্ডলিং',
    difficulty: 'advanced',
    examples: [
      {
        id: 13,
        title: 'Reading and Writing Files',
        title_bn: 'ফাইল পড়া এবং লেখা',
        description: 'পাইথনে ফাইল পড়া এবং লেখা খুবই সহজ।',
        code: `# ফাইলে লেখা (Write to file)
with open("example.txt", "w", encoding="utf-8") as file:  # "w" মানে write mode
    file.write("হ্যালো, এটি একটি টেস্ট ফাইল\\n")  # লাইন লিখুন (Write line)
    file.write("পাইথন দিয়ে ফাইল হ্যান্ডলিং শিখছি\\n")

print("ফাইলে লেখা সম্পন্ন")

# ফাইল পড়া (Read from file)
with open("example.txt", "r", encoding="utf-8") as file:  # "r" মানে read mode
    content = file.read()  # সম্পূর্ণ কন্টেন্ট পড়ুন (Read all content)
    print("\\nফাইলের কন্টেন্ট:")
    print(content)

# লাইন বাই লাইন পড়া (Read line by line)
print("লাইন বাই লাইন পড়া:")
with open("example.txt", "r", encoding="utf-8") as file:
    for line in file:  # প্রতিটি লাইন নিন (Take each line)
        print(line.strip())  # লাইন প্রিন্ট করুন (Print line)`,
        output: `ফাইলে লেখা সম্পন্ন

ফাইলের কন্টেন্ট:
হ্যালো, এটি একটি টেস্ট ফাইল
পাইথন দিয়ে ফাইল হ্যান্ডলিং শিখছি

লাইন বাই লাইন পড়া:
হ্যালো, এটি একটি টেস্ট ফাইল
পাইথন দিয়ে ফাইল হ্যান্ডলিং শিখছি`,
      },
    ],
  },
];
