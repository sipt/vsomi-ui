import { DisposableStore } from "@/common/lifecycle";

interface ViewProps {
	// 共通props
}

abstract class View extends DisposableStore {
	private static InstanceCount = 0;
	readonly domId = `view_${++View.InstanceCount}`;

	protected abstract el: HTMLElement;

	constructor(props: ViewProps) {
		// 初始化
		super();
	}

	onClick(handler: () => void) {
		// 绑定点击事件
		return this;
	}

	// style
	padding(props: { top?: number; right?: number; bottom?: number; left?: number }) {
		if (props.top) {
			this.el.style.paddingTop = `${props.top}px`;
		}
		if (props.right) {
			this.el.style.paddingRight = `${props.right}px`;
		}
		if (props.bottom) {
			this.el.style.paddingBottom = `${props.bottom}px`;
		}
		if (props.left) {
			this.el.style.paddingLeft = `${props.left}px`;
		}
		return this;
	}

	margin(props: { top?: number; right?: number; bottom?: number; left?: number }) {
		if (props.top) {
			this.el.style.marginTop = `${props.top}px`;
		}
		if (props.right) {
			this.el.style.marginRight = `${props.right}px`;
		}
		if (props.bottom) {
			this.el.style.marginBottom = `${props.bottom}px`;
		}
		if (props.left) {
			this.el.style.marginLeft = `${props.left}px`;
		}
		return this;
	}

	backgroundColor(color: string) {
		this.el.style.backgroundColor = color;
		return this;
	}

	styled(styles: { [key: string]: string }) {
		// 设置样式
		return this;
	}

	abstract render(): HTMLElement;
}
