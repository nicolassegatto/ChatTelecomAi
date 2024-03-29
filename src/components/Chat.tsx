'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from 'ai/react'
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
    })

    return (
        <Card className="w-[440px]">
            <CardHeader >
                <CardTitle className="flex items-center gap-4">Chat AI Telecom <Image src={"/assets/alg.png"} alt="logo" width={30} height={30} /></CardTitle>
                <CardDescription>Test NLP using chatGPT 🚀.</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[600px] w-full pr-4">
                    {messages.map(message => {
                        return (
                            <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                                {message.role === 'user' && (
                                    <Avatar>
                                        <AvatarFallback>NS</AvatarFallback>
                                        <AvatarImage src="https://github.com/nicolassegatto.png" />
                                    </Avatar>
                                )}
                                {message.role === 'assistant' && (
                                    <Avatar>
                                        <AvatarFallback>OAI</AvatarFallback>
                                        <AvatarImage src="https://yt3.googleusercontent.com/YZHA15d-NrZl2Ak0h2lvC8Fc6Ml9iDc5ddXL50f-p8qv1k4QUovP2BqUq6wLHLMEaiyhkxul7Q=s900-c-k-c0x00ffffff-no-rj" />
                                    </Avatar>
                                )}
                                <p className="leading-relaxed">
                                    <span className="block font-bold text-slate-700">{message.role === 'user' ? 'Me:' : 'AIgar:'}</span>
                                    {message.content}
                                </p>
                            </div>
                        )
                    })}
                </ScrollArea>
            </CardContent>
            <CardFooter>
                <form className="w-full flex gap-2" onSubmit={handleSubmit}>
                    <Input placeholder="Em que posso te ajudar hoje?" value={input} onChange={handleInputChange} />
                    <Button type="submit">Send</Button>
                </form>
            </CardFooter>
        </Card>
    )
}