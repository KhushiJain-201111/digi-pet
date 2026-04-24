/**
 * Nexus Advanced Virtual Companion - Enhanced Frontend
 * College-level interactive AI agent with typing animations
 */

// Pet SVG definitions remain the same
const PET_SVGS = {
    'dog': `
        <svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="130" rx="50" ry="60" fill="#8B6F47" opacity="0.9"/>
            <circle cx="100" cy="60" r="45" fill="#A0826D"/>
            <ellipse cx="70" cy="25" rx="15" ry="25" fill="#8B6F47"/>
            <ellipse cx="70" cy="28" rx="8" ry="15" fill="#C4B5A0"/>
            <ellipse cx="130" cy="25" rx="15" ry="25" fill="#8B6F47"/>
            <ellipse cx="130" cy="28" rx="8" ry="15" fill="#C4B5A0"/>
            <ellipse cx="100" cy="75" rx="25" ry="20" fill="#C4B5A0"/>
            <circle cx="75" cy="45" r="8" fill="#FFF"/>
            <circle cx="75" cy="45" r="7" fill="#000"/>
            <circle cx="77" cy="43" r="2.5" fill="#FFF"/>
            <circle cx="125" cy="45" r="8" fill="#FFF"/>
            <circle cx="125" cy="45" r="7" fill="#000"/>
            <circle cx="127" cy="43" r="2.5" fill="#FFF"/>
            <ellipse cx="85" cy="78" rx="8" ry="6" fill="#B8A696"/>
            <ellipse cx="115" cy="78" rx="8" ry="6" fill="#B8A696"/>
            <circle cx="100" cy="78" r="6" fill="#3D3D3D"/>
            <path d="M 100 78 L 100 88" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M 95 86 Q 100 92 105 86" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
            <ellipse cx="100" cy="92" rx="4" ry="5" fill="#FF6B9D"/>
            <path d="M 145 140 Q 170 125 175 90" stroke="#8B6F47" stroke-width="9" fill="none" stroke-linecap="round"/>
            <ellipse cx="75" cy="180" rx="12" ry="18" fill="#8B6F47"/>
            <ellipse cx="125" cy="180" rx="12" ry="18" fill="#8B6F47"/>
            <ellipse cx="75" cy="190" rx="6" ry="5" fill="#C4B5A0"/>
            <ellipse cx="125" cy="190" rx="6" ry="5" fill="#C4B5A0"/>
        </svg>
    `,
    'cat': `
        <svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="130" rx="48" ry="58" fill="#FFB347" opacity="0.9"/>
            <circle cx="100" cy="65" r="42" fill="#FFC968"/>
            <path d="M 65 30 L 55 0 L 75 18 Z" fill="#FFB347"/>
            <path d="M 68 26 L 62 8 L 72 19 Z" fill="#FFD699"/>
            <path d="M 135 30 L 145 0 L 125 18 Z" fill="#FFB347"/>
            <path d="M 132 26 L 138 8 L 128 19 Z" fill="#FFD699"/>
            <circle cx="77" cy="48" r="9" fill="#90EE90"/>
            <ellipse cx="77" cy="50" rx="2.5" ry="5" fill="#000"/>
            <circle cx="79" cy="46" r="2.5" fill="#FFF"/>
            <circle cx="123" cy="48" r="9" fill="#90EE90"/>
            <ellipse cx="123" cy="50" rx="2.5" ry="5" fill="#000"/>
            <circle cx="125" cy="46" r="2.5" fill="#FFF"/>
            <path d="M 100 75 L 96 83 L 100 85 L 104 83 Z" fill="#FFB6D9"/>
            <path d="M 100 75 Q 88 83 82 80" stroke="#000" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M 100 75 Q 112 83 118 80" stroke="#000" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <line x1="50" y1="68" x2="25" y2="65" stroke="#000" stroke-width="1.5"/>
            <line x1="50" y1="78" x2="20" y2="80" stroke="#000" stroke-width="1.5"/>
            <line x1="150" y1="68" x2="175" y2="65" stroke="#000" stroke-width="1.5"/>
            <line x1="150" y1="78" x2="180" y2="80" stroke="#000" stroke-width="1.5"/>
            <path d="M 140 170 Q 165 185 170 145" stroke="#FFB347" stroke-width="11" fill="none" stroke-linecap="round"/>
            <path d="M 141 169 Q 164 182 168 145" stroke="#FF9500" stroke-width="4" fill="none" stroke-linecap="round"/>
            <ellipse cx="75" cy="180" rx="14" ry="20" fill="#FFB347"/>
            <ellipse cx="125" cy="180" rx="14" ry="20" fill="#FFB347"/>
            <circle cx="75" cy="193" r="6" fill="#FFD699"/>
            <circle cx="125" cy="193" r="6" fill="#FFD699"/>
        </svg>
    `,
    'rabbit': `
        <svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="135" rx="45" ry="58" fill="#FFFACD" opacity="0.9"/>
            <ellipse cx="100" cy="140" rx="28" ry="35" fill="#FFFACD" opacity="0.5"/>
            <circle cx="100" cy="70" r="40" fill="#FFFACD"/>
            <ellipse cx="75" cy="15" rx="12" ry="42" fill="#FFFACD"/>
            <ellipse cx="75" cy="20" rx="7" ry="35" fill="#FFB6C1"/>
            <ellipse cx="125" cy="15" rx="12" ry="42" fill="#FFFACD"/>
            <ellipse cx="125" cy="20" rx="7" ry="35" fill="#FFB6C1"/>
            <circle cx="78" cy="52" r="8" fill="#FFF"/>
            <circle cx="78" cy="52" r="7" fill="#000"/>
            <circle cx="80" cy="50" r="2.5" fill="#FFF"/>
            <circle cx="122" cy="52" r="8" fill="#FFF"/>
            <circle cx="122" cy="52" r="7" fill="#000"/>
            <circle cx="124" cy="50" r="2.5" fill="#FFF"/>
            <circle cx="100" cy="75" r="5" fill="#FFB6C1"/>
            <circle cx="100" cy="72" r="2" fill="#FF69B4"/>
            <path d="M 100 75 Q 92 84 88 82" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M 100 75 Q 108 84 112 82" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
            <line x1="100" y1="68" x2="100" y2="58" stroke="#FFB6C1" stroke-width="1.5"/>
            <circle cx="100" cy="185" r="18" fill="#FFFACD"/>
            <circle cx="100" cy="185" r="14" fill="#FFF"/>
            <circle cx="100" cy="185" r="10" fill="#FFB6C1"/>
            <ellipse cx="75" cy="185" rx="13" ry="18" fill="#FFFACD"/>
            <ellipse cx="125" cy="185" rx="13" ry="18" fill="#FFFACD"/>
            <circle cx="75" cy="195" r="7" fill="#FFB6C1"/>
            <circle cx="125" cy="195" r="7" fill="#FFB6C1"/>
            <circle cx="70" cy="193" r="2" fill="#FF69B4"/>
            <circle cx="80" cy="193" r="2" fill="#FF69B4"/>
            <circle cx="120" cy="193" r="2" fill="#FF69B4"/>
            <circle cx="130" cy="193" r="2" fill="#FF69B4"/>
        </svg>
    `
};

class NexusCompanion {
    constructor() {
        this.currentState = null;
        this.currentPetType = null;
        this.foodMenuOpen = false;
        this.currentFoods = [];
        this.messageCount = 0;
        this.isTyping = false;
        this.initializeSelectionScreen();
    }

    initializeSelectionScreen() {
        fetch('/api/pets')
            .then(response => response.json())
            .then(pets => {
                const petOptions = document.getElementById('petOptions');
                petOptions.innerHTML = pets.map(pet => `
                    <div class="pet-option" onclick="nexus.selectPet('${pet.type}')">
                        <div class="pet-option-emoji">${pet.emoji}</div>
                        <div class="pet-option-name">${pet.name}</div>
                    </div>
                `).join('');
            })
            .catch(err => console.error('Error loading pets:', err));
    }

    selectPet(petType) {
        fetch('/api/select-pet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pet_type: petType })
        })
            .then(response => response.json())
            .then(data => {
                this.currentPetType = petType;
                this.currentFoods = data.foods;

                document.getElementById('petSelectionOverlay').style.display = 'none';
                document.getElementById('mainContainer').style.display = 'flex';

                document.getElementById('petTitle').textContent = `${data.state.pet_emoji} ${data.state.pet_name}`;

                this.init();
                this.typeMessage(data.message, 'nexus');
            })
            .catch(err => console.error('Error selecting pet:', err));
    }

    init() {
        const petContainer = document.getElementById('pet');
        petContainer.innerHTML = PET_SVGS[this.currentPetType];

        // Event listeners
        document.getElementById('sendBtn').addEventListener('click', () => this.sendMessage());
        document.getElementById('messageInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !this.isTyping) this.sendMessage();
        });
        document.getElementById('petBtn').addEventListener('click', () => this.pet());
        document.getElementById('feedMenuBtn').addEventListener('click', () => this.toggleFoodMenu());
        document.getElementById('resetBtn').addEventListener('click', () => this.reset());

        this.loadFoodOptions();
        this.updateState();

        setInterval(() => this.updateState(), 30000);
        document.getElementById('messageInput').focus();
    }

    loadFoodOptions() {
        const foodOptions = document.getElementById('foodOptions');
        foodOptions.innerHTML = this.currentFoods.map(food => `
            <button class="food-btn" onclick="nexus.feed('${food.name}')">
                <span class="food-emoji">${food.emoji}</span> ${food.name}
            </button>
        `).join('');
    }

    toggleFoodMenu() {
        const menu = document.getElementById('foodMenu');
        this.foodMenuOpen = !this.foodMenuOpen;
        menu.style.display = this.foodMenuOpen ? 'block' : 'none';
        if (this.foodMenuOpen) {
            this.addNexusMessage("What would you like to feed me? 🍽️");
        }
    }

    async updateState() {
        try {
            const response = await fetch('/api/state');
            this.currentState = await response.json();
            this.updateUI();
        } catch (error) {
            console.error('Error updating state:', error);
        }
    }

    updateUI() {
        if (!this.currentState) return;

        const { happiness, hunger, affection, energy, mood } = this.currentState;

        document.getElementById('happinessFill').style.width = happiness + '%';
        document.getElementById('happinessValue').textContent = Math.round(happiness);

        document.getElementById('hungerFill').style.width = hunger + '%';
        document.getElementById('hungerValue').textContent = Math.round(hunger);

        document.getElementById('affectionFill').style.width = affection + '%';
        document.getElementById('affectionValue').textContent = Math.round(affection);

        document.getElementById('energyFill').style.width = energy + '%';
        document.getElementById('energyValue').textContent = Math.round(energy);

        const moodText = document.getElementById('moodText');
        moodText.textContent = mood.charAt(0).toUpperCase() + mood.slice(1);
        this.updateMoodColor(mood);
        this.updatePetAnimation(mood);
    }

    updateMoodColor(mood) {
        const moodColors = {
            'ecstatic': { color: '#FFD700', shadow: 'rgba(255, 215, 0, 0.8)' },
            'happy': { color: '#FFA500', shadow: 'rgba(255, 165, 0, 0.6)' },
            'neutral': { color: '#B0B0C8', shadow: 'rgba(176, 176, 200, 0.4)' },
            'sad': { color: '#FF69B4', shadow: 'rgba(255, 105, 180, 0.5)' },
            'depressed': { color: '#FF6B6B', shadow: 'rgba(255, 107, 107, 0.5)' }
        };

        const moodStyle = moodColors[mood] || moodColors['neutral'];
        const indicator = document.getElementById('moodIndicator');
        indicator.style.borderColor = moodStyle.color;
        indicator.style.color = moodStyle.color;
        indicator.style.boxShadow = `0 0 25px ${moodStyle.shadow}`;
    }

    updatePetAnimation(mood) {
        const petElement = document.getElementById('pet');
        petElement.style.animation = 'none';

        setTimeout(() => {
            if (mood === 'ecstatic') {
                petElement.style.animation = 'bounce 0.6s ease-in-out';
            } else if (mood === 'happy') {
                petElement.style.animation = 'idle 3s ease-in-out infinite';
            }
        }, 10);
    }

    addUserMessage(message) {
        const chatContainer = document.getElementById('chatContainer');
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble user-message';
        bubble.textContent = message;
        chatContainer.appendChild(bubble);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    addNexusMessage(message) {
        const chatContainer = document.getElementById('chatContainer');
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble nexus-message';
        bubble.textContent = message;
        chatContainer.appendChild(bubble);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    async typeMessage(message, sender) {
        const chatContainer = document.getElementById('chatContainer');
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${sender === 'user' ? 'user-message' : 'nexus-message'}`;
        bubble.textContent = '';
        chatContainer.appendChild(bubble);

        this.isTyping = true;
        let charIndex = 0;

        const typeInterval = setInterval(() => {
            if (charIndex < message.length) {
                bubble.textContent += message[charIndex];
                charIndex++;
                chatContainer.scrollTop = chatContainer.scrollHeight;
            } else {
                clearInterval(typeInterval);
                this.isTyping = false;
            }
        }, 15);
    }

    async sendMessage() {
        const input = document.getElementById('messageInput');
        const message = input.value.trim();

        if (!message || this.isTyping) return;

        input.value = '';
        this.addUserMessage(message);

        try {
            const response = await fetch('/api/talk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: message })
            });

            const data = await response.json();
            
            // Add slight delay for natural conversation feel
            setTimeout(() => {
                this.typeMessage(data.message, 'nexus');
            }, 300);

            this.updateState();
        } catch (error) {
            console.error('Error sending message:', error);
            this.addNexusMessage("Sorry, I had trouble understanding that. Could you rephrase?");
        }
    }

    async pet() {
        try {
            const response = await fetch('/api/pet', { method: 'POST' });
            const data = await response.json();
            this.typeMessage(data.message, 'nexus');
            this.updateState();
        } catch (error) {
            console.error('Error petting:', error);
        }
    }

    async feed(foodName) {
        try {
            const response = await fetch('/api/feed', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ food: foodName })
            });

            const data = await response.json();
            this.toggleFoodMenu();
            this.typeMessage(data.message, 'nexus');
            this.updateState();
        } catch (error) {
            console.error('Error feeding:', error);
        }
    }

    async reset() {
        if (confirm('Switch to a different companion?')) {
            document.getElementById('mainContainer').style.display = 'none';
            document.getElementById('petSelectionOverlay').style.display = 'flex';
            document.getElementById('chatContainer').innerHTML = '';
            this.currentState = null;
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.nexus = new NexusCompanion();
});
