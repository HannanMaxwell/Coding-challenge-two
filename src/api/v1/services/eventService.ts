
// interface
export interface Event {
    id: number;
    name: string;
    date: string;
    capacity: number;
    registrationCount: number;
}

export interface EventWithPopularity extends Event {
    spotsRemaining: number;
    popularityScore: number;
    popularityTier: string;
}

export class EventService {
    private events: Event[] = [
        { id: 1, name: "Tech Conference 2025", date: "2025-03-15T09:00:00.000Z", capacity: 200, registrationCount: 185 },
        { id: 2, name: "Startup Pitch Night", date: "2025-02-20T18:00:00.000Z", capacity: 50, registrationCount: 12 },
        { id: 3, name: "Web Dev Workshop", date: "2025-02-10T10:00:00.000Z", capacity: 30, registrationCount: 30 }
    ];

    getAll(): Event[] { 
        return this.events; 
    }
    
    getOne(id: number): Event | undefined { 
        return this.events.find(e => e.id === id); 
    }
    
    getPopularity(id: number): EventWithPopularity | null {
        const event = this.getOne(id);
        if (!event) return null;
        
        const score = Math.round((event.registrationCount / event.capacity) * 1000) / 10;
        let tier = "New";
        if (score >= 90) tier = "Hot";
        else if (score >= 70) tier = "Popular";
        else if (score >= 50) tier = "Moderate";
        else if (score >= 25) tier = "Building";
        
        return {
            ...event,
            spotsRemaining: event.capacity - event.registrationCount,
            popularityScore: score,
            popularityTier: tier
        };
    }
}