import {type Contact, type User} from '../../../../redux/types';

export type Data = {
	receiptId: number;
	body: {
		typeWebhook: string;
		instanceData: {
			idInstance: number;
			wid: string;
			typeInstance: string;
		};
		timestamp: number;
		idMessage: string;
		senderData: {
			chatId: string;
			sender: string;
			senderName: string;
		};
		messageData: {
			typeMessage: string;
			textMessageData: {
				textMessage: string;
			};
		};
	};
};

export type UserData = {
	user: User;
	chatId: string;
	contacts: Contact[];
};
