interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
	workFromHome() { 
        const home = 'Working from home';
        return (home); 
    }
	getCoffeeBreak() { 
        const coffee = 'Getting a coffee break';
        return (coffee); 
    }
	workDirectorTasks() { 
        const direct = 'Getting to director tasks';
        return (direct);
    }
}

export class Teacher implements TeacherInterface {
	workFromHome() { 
        const home = 'Cannot work from home';
        return (home);
    }
	getCoffeeBreak() { 
        const coffeBreak = 'Cannot have a break';
        return (coffeBreak);
    }
	workTeacherTasks() { 
        const work = 'Getting to work';
        return (work);
    }
}

export function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) return (new Teacher());
	return (new Director());
}
