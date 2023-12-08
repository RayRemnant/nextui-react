"use client";
import { addDocument } from "@/db";

import { title } from "@/components/primitives";
import { Card } from "@nextui-org/card";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import React, { useState } from "react";

export default function Home() {
	let [name, setName] = useState("");

	/* const validateEmail = (value: string) =>
		value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

	const isInvalid = React.useMemo(() => {
		if (name === "") return false;

		return validateEmail(name) ? false : true;
	}, [name]); */

	return (
		<div>
			<form>
				<Input
					value={name}
					type="email"
					label="Email"
					variant="bordered"
					/* isInvalid={isInvalid}
				color={isInvalid ? "danger" : "success"}
				errorMessage={isInvalid && "Please enter a valid email"} */
					onValueChange={setName}
					className="max-w-xs"
				/>
				<Button
					onClick={() => {
						addDocument({
							name,
						});
					}}
				>
					add document
				</Button>
			</form>
		</div>
	);
}
