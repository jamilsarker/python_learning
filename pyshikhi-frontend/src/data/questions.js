export const questions = [
  {
    id: 1,
    title: 'Print Hello World',
    title_bn: 'হ্যালো ওয়ার্ল্ড প্রিন্ট করুন',
    difficulty: 'easy',
    topic: 'Basics',
    description: 'একটি প্রোগ্রাম লিখুন যা "Hello, World!" প্রিন্ট করবে।',
    description_en: 'Write a program that prints "Hello, World!"',
    hint: 'print() ফাংশন ব্যবহার করুন',
    starterCode: '# আপনার কোড এখানে লিখুন\n',
    solution: `# "Hello, World!" প্রিন্ট করুন (Print "Hello, World!")
print("Hello, World!")`,
    testCases: [
      { input: '', expected: 'Hello, World!' },
    ],
  },
  {
    id: 2,
    title: 'Add Two Numbers',
    title_bn: 'দুইটি সংখ্যা যোগ করুন',
    difficulty: 'easy',
    topic: 'Arithmetic',
    description: 'দুইটি সংখ্যা যোগ করে ফলাফল প্রিন্ট করুন।',
    description_en: 'Add two numbers and print the result.',
    hint: '+ অপারেটর ব্যবহার করুন',
    starterCode: `# দুইটি সংখ্যা দেওয়া আছে
a = 10
b = 20

# আপনার কোড এখানে লিখুন
`,
    solution: `# দুইটি সংখ্যা দেওয়া আছে (Two numbers are given)
a = 10
b = 20

# সংখ্যা দুইটি যোগ করুন (Add the two numbers)
result = a + b

# ফলাফল প্রিন্ট করুন (Print result)
print(result)`,
    testCases: [
      { input: '', expected: '30' },
    ],
  },
  {
    id: 3,
    title: 'Check Even or Odd',
    title_bn: 'জোড় না বিজোড় চেক করুন',
    difficulty: 'easy',
    topic: 'Conditionals',
    description: 'একটি সংখ্যা জোড় (even) না বিজোড় (odd) চেক করুন।',
    description_en: 'Check if a number is even or odd.',
    hint: 'মডুলাস অপারেটর (%) ব্যবহার করুন। যদি num % 2 == 0 হয়, তাহলে জোড়।',
    starterCode: `num = 7

# আপনার কোড এখানে লিখুন
`,
    solution: `num = 7  # সংখ্যা দেওয়া আছে (Number is given)

# চেক করুন সংখ্যা জোড় না বিজোড় (Check if number is even or odd)
if num % 2 == 0:  # যদি ২ দিয়ে ভাগ করলে ভাগশেষ ০ হয় (If remainder is 0 when divided by 2)
    print("জোড়")  # জোড় সংখ্যা (Even number)
else:
    print("বিজোড়")  # বিজোড় সংখ্যা (Odd number)`,
    testCases: [
      { input: '', expected: 'বিজোড়' },
    ],
  },
  {
    id: 4,
    title: 'Find Maximum of Three Numbers',
    title_bn: 'তিনটি সংখ্যার মধ্যে সবচেয়ে বড়টি খুঁজুন',
    difficulty: 'easy',
    topic: 'Conditionals',
    description: 'তিনটি সংখ্যার মধ্যে সবচেয়ে বড় সংখ্যাটি প্রিন্ট করুন।',
    description_en: 'Print the largest of three numbers.',
    hint: 'if-elif-else বা max() ফাংশন ব্যবহার করুন',
    starterCode: `a = 10
b = 25
c = 15

# আপনার কোড এখানে লিখুন
`,
    solution: `a = 10  # প্রথম সংখ্যা (First number)
b = 25  # দ্বিতীয় সংখ্যা (Second number)
c = 15  # তৃতীয় সংখ্যা (Third number)

# সবচেয়ে বড় সংখ্যা খুঁজুন (Find the largest number)
if a >= b and a >= c:  # যদি a সবচেয়ে বড় হয় (If a is largest)
    print(a)
elif b >= a and b >= c:  # যদি b সবচেয়ে বড় হয় (If b is largest)
    print(b)
else:  # নাহলে c সবচেয়ে বড় (Otherwise c is largest)
    print(c)`,
    testCases: [
      { input: '', expected: '25' },
    ],
  },
  {
    id: 5,
    title: 'Print Numbers 1 to 10',
    title_bn: '১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করুন',
    difficulty: 'easy',
    topic: 'Loops',
    description: '১ থেকে ১০ পর্যন্ত সব সংখ্যা প্রিন্ট করুন (প্রতিটি আলাদা লাইনে)।',
    description_en: 'Print all numbers from 1 to 10 (each on a separate line).',
    hint: 'for লুপ এবং range() ফাংশন ব্যবহার করুন',
    starterCode: `# আপনার কোড এখানে লিখুন
`,
    solution: `# ১ থেকে ১০ পর্যন্ত লুপ চালান (Loop from 1 to 10)
for i in range(1, 11):  # range(1, 11) মানে ১ থেকে ১০ (1 to 10)
    print(i)  # প্রতিটি সংখ্যা প্রিন্ট করুন (Print each number)`,
    testCases: [
      { input: '', expected: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10' },
    ],
  },
  {
    id: 6,
    title: 'Sum of First N Natural Numbers',
    title_bn: 'প্রথম N সংখ্যক প্রাকৃতিক সংখ্যার যোগফল',
    difficulty: 'medium',
    topic: 'Loops',
    description: 'প্রথম n সংখ্যক প্রাকৃতিক সংখ্যার যোগফল বের করুন।',
    description_en: 'Find the sum of first n natural numbers.',
    hint: 'একটি লুপ ব্যবহার করে প্রতিটি সংখ্যা যোগ করুন বা সূত্র ব্যবহার করুন: n * (n + 1) / 2',
    starterCode: `n = 10

# আপনার কোড এখানে লিখুন
`,
    solution: `n = 10  # কতগুলো সংখ্যা যোগ করতে হবে (How many numbers to add)

# যোগফল শুরু করুন ০ দিয়ে (Start sum with 0)
sum = 0

# ১ থেকে n পর্যন্ত লুপ চালান (Loop from 1 to n)
for i in range(1, n + 1):
    sum = sum + i  # প্রতিটি সংখ্যা যোগ করুন (Add each number)

# যোগফল প্রিন্ট করুন (Print sum)
print(sum)`,
    testCases: [
      { input: '', expected: '55' },
    ],
  },
  {
    id: 7,
    title: 'Factorial of a Number',
    title_bn: 'একটি সংখ্যার ফ্যাক্টোরিয়াল',
    difficulty: 'medium',
    topic: 'Loops',
    description: 'একটি সংখ্যার ফ্যাক্টোরিয়াল বের করুন। যেমন: 5! = 5 × 4 × 3 × 2 × 1 = 120',
    description_en: 'Find the factorial of a number.',
    hint: 'একটি লুপ ব্যবহার করে ১ থেকে n পর্যন্ত সব সংখ্যা গুণ করুন',
    starterCode: `n = 5

# আপনার কোড এখানে লিখুন
`,
    solution: `n = 5  # যে সংখ্যার ফ্যাক্টোরিয়াল বের করতে হবে (Number to find factorial)

# ফ্যাক্টোরিয়াল শুরু করুন ১ দিয়ে (Start factorial with 1)
factorial = 1

# ১ থেকে n পর্যন্ত লুপ চালান (Loop from 1 to n)
for i in range(1, n + 1):
    factorial = factorial * i  # প্রতিটি সংখ্যা গুণ করুন (Multiply each number)

# ফ্যাক্টোরিয়াল প্রিন্ট করুন (Print factorial)
print(factorial)`,
    testCases: [
      { input: '', expected: '120' },
    ],
  },
  {
    id: 8,
    title: 'Reverse a String',
    title_bn: 'একটি স্ট্রিং উল্টে দিন',
    difficulty: 'medium',
    topic: 'Strings',
    description: 'একটি স্ট্রিং উল্টে (reverse) প্রিন্ট করুন।',
    description_en: 'Reverse a string and print it.',
    hint: 'স্লাইসিং ব্যবহার করুন: text[::-1]',
    starterCode: `text = "Python"

# আপনার কোড এখানে লিখুন
`,
    solution: `text = "Python"  # মূল টেক্সট (Original text)

# স্ট্রিং উল্টে দিন (Reverse string)
reversed_text = text[::-1]  # [::-1] মানে উল্টো দিক থেকে (from reverse)

# উল্টানো টেক্সট প্রিন্ট করুন (Print reversed text)
print(reversed_text)`,
    testCases: [
      { input: '', expected: 'nohtyP' },
    ],
  },
  {
    id: 9,
    title: 'Count Vowels in a String',
    title_bn: 'স্ট্রিংয়ে স্বরবর্ণ গণনা করুন',
    difficulty: 'medium',
    topic: 'Strings',
    description: 'একটি স্ট্রিংয়ে কতগুলো স্বরবর্ণ (a, e, i, o, u) আছে তা গণনা করুন।',
    description_en: 'Count the number of vowels in a string.',
    hint: 'একটি লুপ চালিয়ে প্রতিটি অক্ষর চেক করুন',
    starterCode: `text = "Hello World"

# আপনার কোড এখানে লিখুন
`,
    solution: `text = "Hello World"  # টেক্সট দেওয়া আছে (Text is given)

# স্বরবর্ণগুলো (Vowels)
vowels = "aeiouAEIOU"

# কাউন্টার শুরু করুন (Start counter)
count = 0

# প্রতিটি অক্ষর চেক করুন (Check each character)
for char in text:
    if char in vowels:  # যদি অক্ষরটি স্বরবর্ণ হয় (If character is a vowel)
        count = count + 1  # কাউন্ট বাড়ান (Increment count)

# স্বরবর্ণের সংখ্যা প্রিন্ট করুন (Print vowel count)
print(count)`,
    testCases: [
      { input: '', expected: '3' },
    ],
  },
  {
    id: 10,
    title: 'Check Prime Number',
    title_bn: 'মৌলিক সংখ্যা চেক করুন',
    difficulty: 'medium',
    topic: 'Loops & Conditionals',
    description: 'একটি সংখ্যা মৌলিক (prime) কিনা চেক করুন এবং "Prime" বা "Not Prime" প্রিন্ট করুন।',
    description_en: 'Check if a number is prime and print "Prime" or "Not Prime".',
    hint: '২ থেকে সংখ্যা-১ পর্যন্ত লুপ চালিয়ে দেখুন কোনো সংখ্যা দিয়ে ভাগ যায় কিনা',
    starterCode: `num = 17

# আপনার কোড এখানে লিখুন
`,
    solution: `num = 17  # সংখ্যা দেওয়া আছে (Number is given)

# যদি সংখ্যা ১ এর কম হয় (If number is less than 1)
if num < 2:
    print("Not Prime")
else:
    # ধরে নিন সংখ্যা মৌলিক (Assume number is prime)
    is_prime = True
    
    # ২ থেকে সংখ্যা-১ পর্যন্ত চেক করুন (Check from 2 to num-1)
    for i in range(2, num):
        if num % i == 0:  # যদি ভাগ যায় (If divisible)
            is_prime = False  # মৌলিক নয় (Not prime)
            break  # লুপ থেকে বের হয়ে যান (Exit loop)
    
    # ফলাফল প্রিন্ট করুন (Print result)
    if is_prime:
        print("Prime")
    else:
        print("Not Prime")`,
    testCases: [
      { input: '', expected: 'Prime' },
    ],
  },
  {
    id: 11,
    title: 'Find Length of List',
    title_bn: 'লিস্টের দৈর্ঘ্য বের করুন',
    difficulty: 'easy',
    topic: 'Lists',
    description: 'একটি লিস্টে কতগুলো উপাদান আছে তা বের করুন।',
    description_en: 'Find the number of elements in a list.',
    hint: 'len() ফাংশন ব্যবহার করুন',
    starterCode: `fruits = ["আম", "কলা", "আপেল", "আঙ্গুর"]

# আপনার কোড এখানে লিখুন
`,
    solution: `fruits = ["আম", "কলা", "আপেল", "আঙ্গুর"]  # ফলের লিস্ট (List of fruits)

# লিস্টের দৈর্ঘ্য বের করুন (Find list length)
length = len(fruits)

# দৈর্ঘ্য প্রিন্ট করুন (Print length)
print(length)`,
    testCases: [
      { input: '', expected: '4' },
    ],
  },
  {
    id: 12,
    title: 'Sum of List Elements',
    title_bn: 'লিস্টের উপাদানগুলোর যোগফল',
    difficulty: 'easy',
    topic: 'Lists',
    description: 'একটি লিস্টের সব সংখ্যার যোগফল বের করুন।',
    description_en: 'Find the sum of all numbers in a list.',
    hint: 'sum() ফাংশন বা লুপ ব্যবহার করুন',
    starterCode: `numbers = [5, 10, 15, 20, 25]

# আপনার কোড এখানে লিখুন
`,
    solution: `numbers = [5, 10, 15, 20, 25]  # সংখ্যার লিস্ট (List of numbers)

# লিস্টের যোগফল বের করুন (Find sum of list)
total = sum(numbers)

# যোগফল প্রিন্ট করুন (Print sum)
print(total)`,
    testCases: [
      { input: '', expected: '75' },
    ],
  },
];
