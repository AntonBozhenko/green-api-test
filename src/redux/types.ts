export type Contact = {
	chatId: string;
	number: string;
};

export type Message = {
	chatId: string;
	isMine: boolean;
	text: string;
	time: string;
};

export type State = {
	user: [string, string];
	contacts: Contact[];
	activeContact: Contact;
	messages: Message[];
};
