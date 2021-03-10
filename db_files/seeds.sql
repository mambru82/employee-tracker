INSERT INTO authors (firstName, lastName)
VALUES
    ('Jane', 'Austen'),
    ('Mark', 'Twain'),
    ('Lewis', 'Carroll'),
    ('Andre', 'Asselin');

INSERT INTO books (title, authorId)
VALUES  
    ('Pride and Prejudice', 1),
    ('Emma', 1),
    ('The Adventures of Tom Sawyer', 2),
    ('Adventures of Huckleberry Finn', 2),
    ("Alice's Adventures in Wonderland", 3),
    ('Dracula', null);