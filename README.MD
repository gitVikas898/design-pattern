## Design Pattern Based Questions

# Singleton
---
- The Singleton Pattern is a design pattern in software development that ensures a class has only one instance 
- and provides a global point of access to that instance. 
- Just like a compnay has one Ceo 
- Checks if an instance already exists (Singleton.instance).
- If no instance exists, it creates one and stores it.
- If an instance already exists, it returns the existing instance.
- This ensures that only one instance of the Singleton class is created.
    # Why Not Just Use Global Variables?
    - Global Variables: Anyone can modify them, leading to potential bugs.
    - Singleton Pattern: Encapsulates the instance and provides controlled access, making it safer and more maintainable.
---