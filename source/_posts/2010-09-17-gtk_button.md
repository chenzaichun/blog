categories: 
  - Linux
  - programming
comments: true
date: 2010-09-17 17:37:21
layout: post
published: true
status: publish
tags: 
  - gtk
  - GUI
  - Linux
title: GTK+按钮
type: post
---

```cpp
/* compile command:
   gcc -o button button.c `pkg-config --libs --cflags gtk+-2.0`
*/
#include <gtk/gtk.h>

static void destroy(GtkWidget*, gpointer);

int main(int argc,
		 char *argv[])
{
	GtkWidget *window, *button;

	gtk_init(&argc, &argv);

	window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
	gtk_window_set_title(GTK_WINDOW(window), "Buttons");
	gtk_container_set_border_width(GTK_CONTAINER(window), 25);
	gtk_widget_set_size_request(window, 200, 100);

	g_signal_connect(G_OBJECT(window), "destroy",
					 G_CALLBACK(destroy), NULL);

	/* Create a new button that has a mnemonic key of Alt+c. */
	button = gtk_button_new_with_mnemonic("_Close");
	gtk_button_set_relief(GTK_BUTTON(button), GTK_RELIEF_NONE);

	/* Connect the button to the clicked signal. The callback function
	 * recieves the window followed by the button because the arguments
	 * are swapped
	 */
	g_signal_connect_swapped(G_OBJECT(button), "clicked",
							 G_CALLBACK(gtk_widget_destroy),
							 (gpointer)window);

	gtk_container_add(GTK_CONTAINER(window), button);
	gtk_widget_show_all(window);

	gtk_main();

	return 0;
}

/* Stop the GTK+ main loop function */
static void
destroy(GtkWidget *window,
		gpointer data)
{
	gtk_main_quit();
}
```
