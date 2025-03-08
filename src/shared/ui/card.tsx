import * as React from 'react';
import { cn } from '@/shared/utils/tw-merge';

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				'bg-background text-background-foreground min-h-fit rounded-xl border shadow',
				className
			)}
			{...props}
		/>
	);
}

function CardHeader({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn('flex flex-col gap-1.5 p-6', className)}
			{...props}
		/>
	);
}

function CardTitle({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<h3
			className={cn(
				'leading-none font-semibold tracking-tight',
				className
			)}
			{...props}
		/>
	);
}

function CardDescription({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<p
			className={cn('text-muted-foreground text-sm leading-4', className)}
			{...props}
		/>
	);
}

function CardContent({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn('p-6 pt-0', className)} {...props} />;
}

function CardFooter({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn('flex items-center p-6 pt-0', className)}
			{...props}
		/>
	);
}

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
};
