export type Contact = {
	chatId: string;
	number: string;
};

export type State = {
	user: [string, string];
	contacts: Contact[];
};
