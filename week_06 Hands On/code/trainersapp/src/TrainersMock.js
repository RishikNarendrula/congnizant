import Trainer from './trainer';
const trainersMock = [
    new Trainer(1,
        'John Doe',
        'johndoe121@gmail.com' ,
        '1234567890',
        'JavaScript',
        ['React', 'Node.js', 'Express']),
    new Trainer(2,
        'Jane Smith',
        'JaneSmith121@gmail.com' ,
        '1234567899',
        'Python',
        ['Django', 'Flask', 'Pandas']),
    new Trainer(3,
        'Alice Johnson',
        'JohnsonAlice1@gmail.com',
        '1234567898',
        'Java',
        ['Spring', 'Hibernate', 'Maven'])
]

export default trainersMock;